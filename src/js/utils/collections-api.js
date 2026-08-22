import axios from 'axios';
import { apiKey } from './data';
import { getDiscoverNfts } from './discover-api';

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

export async function getCollections(cursor = null) {
  const result = await getDiscoverNfts(cursor);

  const collections = [
    ...new Map(
      result.collections.map(collection => [
        `${collection.collection}-${collection.chain}`,
        collection,
      ])
    ).values(),
  ];

  return {
    collections,
    next: result.next,
  };
}
