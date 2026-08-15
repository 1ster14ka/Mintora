import axios from 'axios';
import { apiKey, collections } from './data';

const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForContract`;

export async function getAllNfts() {
  const allNfts = await Promise.all(
    collections.map(async collection => {
      const response = await axios.get(baseURL, {
        params: {
          contractAddress: collection.address,
          withMetadata: true,
          limit: 2,
        },
      });
      const data = response.data.nfts;
      return data;
    })
  );
  return allNfts.flat(1);
}
