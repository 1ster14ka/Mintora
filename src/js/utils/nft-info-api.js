import axios from 'axios';
import { apiKey } from './data';

export async function getCollectionInformation(slug) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/collections/${slug}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  );

  return response.data;
}

export async function getNftInformation(chain, contract, identifier) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/chain/${chain}/contract/${contract}/nfts/${identifier}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  );

  console.log(response);

  return response.data.nft;
}
