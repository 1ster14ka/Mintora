import axios from 'axios';
import { apiKey, collections } from './data';

const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getContractMetadata`;

export async function getCollections() {
  const data = await Promise.all(
    collections.map(async collection => {
      const response = await axios.get(baseURL, {
        params: {
          contractAddress: collection.address,
        },
      });
      const data = response.data;

      return {
        id: data.address,
        name: data.openSeaMetadata?.collectionName ?? data.name,
        username: data.openSeaMetadata?.twitterUsername
          ? `@${data.openSeaMetadata.twitterUsername}`
          : '',
        avatar: data.openSeaMetadata?.imageUrl,
        volume: '-',
        change24h: 0,
        floorPrice: data.openSeaMetadata?.floorPrice ?? null,
        items: Number(data.totalSupply) || 0,
        owners: '-',
      };
    })
  );
  return data;
}
