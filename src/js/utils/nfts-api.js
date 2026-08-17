// import { getCollections } from './collections-api';

import axios from 'axios';
import { apiKey } from './data';
import { getTrendingCollections } from './collections-api';

export async function getCollectionNfts(slug, cursor) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/collection/${slug}/nfts`,
    {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        limit: 1,
        cursor,
      },
    }
  );
  return response.data;
}

export async function getExploreNfts() {
  const collections = await getTrendingCollections(20);

  const results = await Promise.all(
    collections.map(collection => getCollectionNfts(collection.collection))
  );

  return results
    .flatMap(result => result.nfts)
    .filter(result => result.image_url);
}
