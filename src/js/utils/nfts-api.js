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

export async function getExploreNfts(limit) {
  const collections = await getTrendingCollections(limit);

  const results = await Promise.all(
    collections.map(async collection => {
      const nft = await getCollectionNfts(collection.collection);

      return {
        ...nft.nfts[0],
        chain: collection.contracts[0].chain,
        contract: collection.contracts[0].address,
      };
    })
  );

  return results
    .flatMap(result => {
      return result;
    })
    .filter(result => result.image_url)
    .slice(0, 8);
}
