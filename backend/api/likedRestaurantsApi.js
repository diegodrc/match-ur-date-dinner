import { Router } from 'express';

const router = Router();

import client from './mongoConnection.js';

const dbName = 'matchUrDate';

router.post('/', async (req, res) => {
  try {
    await client.connect();

    const likedRestaurantsCollection = client.db(dbName).collection('likedRestaurants');
    const { sessionId, userId, restaurantId } = req.body;

    if (!sessionId || !userId || !restaurantId) {
      return res.status(400).json({ error: 'sessionId, userId, restaurantId are required fields.' });
    }

    await likedRestaurantsCollection.insertOne({ sessionId, userId, restaurantId });

    res.json({ message: 'Restaurant added successfully' });
  } catch (error) {
    console.error('Error while connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

router.get('/', async (req, res) => {
    try {
      await client.connect();
  
      const likedRestaurantsCollection = client.db(dbName).collection('likedRestaurants');
      const restaurants = await likedRestaurantsCollection.find({}).toArray();
  
      res.json(restaurants);
    } catch (error) {
      console.error('Error while connecting to MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await client.close();
    }
  });

export default router;
