import axios from 'axios';
import { apiKey, collections } from './data';

export async function getAllNfts() {
  const allNfts = await Promise.all(
    collections.map(async collection => {
      const response = await axios.get(
        `https://api.opensea.io/api/v2/chain/ethereum/contract/${collection.address}/nfts`,
        {
          headers: {
            'x-api-key': `${apiKey}`,
          },
          params: {
            limit: 2,
          },
        }
      );

      const data = response.data.nfts;

      return data;
    })
  );
  return allNfts.flat(1);
}
