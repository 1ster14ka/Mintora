import axios from 'axios';
import { apiKey } from './data';

const baseURL = `https://api.opensea.io/api/v2/collections/trending`;

export async function getTrendingCollections(limit) {
  const response = await axios.get(baseURL, {
    headers: {
      'x-api-key': `${apiKey}`,
    },
    params: {
      limit: limit,
    },
  });

  return response.data.collections.map(el => {
    return {
      ...el,
      identifier: el.collection,
      floorPrice: el.floorPrice || null,
    };
  });
}
