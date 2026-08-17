import axios from 'axios';
import { apiKey, collections } from './data';

const baseURL = `https://api.opensea.io/api/v2/collections/top`;

export async function getTopCollections(limit, days = 'one_day') {
  const response = await axios.get(baseURL, {
    headers: {
      'x-api-key': `${apiKey}`,
    },
    params: {
      limit: limit,
      timeframe: days,
    },
  });

  const collections = response.data.collections;

  return Promise.all(
    collections.map(async collection => {
      const stats = await getCollectionStats(collection.collection);

      return {
        id: collection.collection,
        name: collection.name,
        username:
          collection.instagram_username ||
          collection.twitter_username ||
          'User',
        avatar: collection.image_url,

        volume: stats.volume,
        change24h: 0,
        floorPrice: stats.floor_price,
        owners: stats.num_owners,
        items: 0,
      };
    })
  );
}
async function getCollectionStats(slug) {
  const result = await axios.get(
    `https://api.opensea.io/api/v2/collections/${slug}/stats`,
    {
      headers: {
        'x-api-key': `${apiKey}`,
      },
    }
  );

  return result.data.total;
}
