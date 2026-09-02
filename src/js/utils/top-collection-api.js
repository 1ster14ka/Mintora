import axios from 'axios';
import { apiKey, collections } from './data';

const baseURL = `https://api.opensea.io/api/v2/collections/top`;

export async function getTopCollections(
  limit,
  days = 'one_day',
  cursor = null
) {
  const response = await axios.get(baseURL, {
    headers: {
      'x-api-key': `${apiKey}`,
    },
    params: {
      limit: limit,
      timeframe: days,
      ...(cursor && { cursor }),
    },
  });

  const data = response.data;

  const collections = await Promise.all(
    data.collections.map(async collection => {
      const stats = await getCollectionStats(collection.collection);

      return {
        owner: collection.owner,
        chain: collection.contracts[0].chain,
        contract: collection.contracts[0].address,
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

  return {
    collections,
    next: data.next,
  };
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
