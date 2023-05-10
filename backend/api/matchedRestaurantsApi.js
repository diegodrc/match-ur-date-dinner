import { Router } from 'express';
import { MongoClient } from 'mongodb';

const router = Router();
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MONGODB_URI not found in the environment. Please make sure the .env file is set up correctly.');
  process.exit(1);
}

const dbName = 'matchUrDate';
const client = new MongoClient(uri, { useUnifiedTopology: true });

router.post('/', async (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: 'sessionId is a required field.' });
  }

  try {
    await client.connect();
    const likedRestaurantsCollection = client.db(dbName).collection('likedRestaurants');
    const restaurants = await likedRestaurantsCollection.aggregate([
      { $match: { sessionId } },
      {
        $group: {
          _id: '$restaurantId',
          count: { $sum: 1 },
          users: { $push: '$userId' },
        },
      },
      { $match: { count: { $gt: 1 } } },
      { $project: { _id: 0, restaurantId: '$_id', count: 1, users: 1 } },
    ]).toArray();

    // Insert the matched restaurants into the matchedRestaurants collection
    const matchedRestaurantsCollection = client.db(dbName).collection('matchedRestaurants');
    const matchedRestaurants = restaurants.map((restaurant) => {
      return { sessionId, restaurant };
    });
    await matchedRestaurantsCollection.insertMany(matchedRestaurants);

    res.json(restaurants);
  } catch (error) {
    console.error('Error while connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

router.get('/:sessionId', async (req, res) => {
  const { sessionId } = req.params;

  if (!sessionId) {
    return res.status(400).json({ error: 'sessionId is a required parameter.' });
  }

  try {
    await client.connect();
    const matchedRestaurantsCollection = client.db(dbName).collection('matchedRestaurants');
    const matchedRestaurants = await matchedRestaurantsCollection.find({ sessionId }).toArray();

    res.json(matchedRestaurants);
  } catch (error) {
    console.error('Error while connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

export default router;
