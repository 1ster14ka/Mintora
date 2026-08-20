import axios from 'axios';
import { apiKey } from './data';

export async function getCollectionNfts(slug, cursor = null) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/collection/${slug}/nfts`,
    {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        limit: 100,
        ...(cursor && { next: cursor }),
      },
    }
  );

  return response.data;
}
