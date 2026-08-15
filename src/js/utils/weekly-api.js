import axios from 'axios';
import { apiKey } from './data';

const contractAddress = '0xEd5AF388653567Af2F388E6224dC7C4b3241C544';
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForContract`;

export async function weeklyNft() {
  const response = await axios.get(baseURL, {
    params: {
      contractAddress,
      withMetadata: true,

      limit: 20,
    },
  });

  const weeklyCards = response.data.nfts.map(nft => ({
    id: nft.tokenId,
    image: nft.image?.cachedUrl,
    name: nft.name,
    creator: nft.contract?.contractDeployer,
    floorPrice: nft.contract?.openSeaMetadata?.floorPrice,
  }));
  return weeklyCards;
}
