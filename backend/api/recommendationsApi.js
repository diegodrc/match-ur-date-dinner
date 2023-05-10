import { Router } from 'express';
import express from 'express';
import axios from 'axios';
import client from './mongoConnection.js';

const router = Router();
const dbName = 'matchUrDate';

// Middleware
router.use(express.json());

const getRestaurantRecommendations = async (lat, lon, radius) => {
  const endpoint = 'https://overpass-api.de/api/interpreter?data=';
  const query = `[out:json];
    node(around:${radius},${lat},${lon})["amenity"="restaurant"];
    out center;`;

  const url = `${endpoint}${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url, { timeout: 60000 }); // set a 30-second timeout
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Endpoint to retrieve restaurant recommendations
router.get('/recommendations', async (req, res) => {
  const { lat, lon, radius } = req.query;

  try {
    const recommendations = await getRestaurantRecommendations(lat, lon, radius);

    await client.connect();
    const recommendationsCollection = client.db(dbName).collection('recommendations');
    const sessionId = req.sessionID;
    const recommendationsWithSessionId = recommendations.elements.map((element) => ({
      sessionId,
      restaurantId: element.id,
      latitude: element.lat,
      longitude: element.lon,
      name: element.tags.name || '',
      cuisine: element.tags.cuisine || '',
      website: element.tags.website || '',
      phone: element.tags.phone || '',
      address: `${element.tags['addr:street'] || ''} ${element.tags['addr:housenumber'] || ''} ${element.tags['addr:city'] || ''} ${element.tags['addr:postcode'] || ''}`.trim(),
    }));

    await recommendationsCollection.insertMany(recommendationsWithSessionId);
    await client.close();

    res.json(recommendationsWithSessionId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve restaurant recommendations' });
  }
});

export default router;
