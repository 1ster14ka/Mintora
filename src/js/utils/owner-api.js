import axios from 'axios';
import { apiKey } from './data';

export async function getInfoOwner(owner) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/accounts/${owner}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  );

  return response.data;
}

export async function getOwnerAccount(chain, address) {
  // console.log(address);

  const response = await axios.get(
    `https://api.opensea.io/api/v2/chain/${chain}/account/${address}/nfts`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  );

  return response.data;
}
