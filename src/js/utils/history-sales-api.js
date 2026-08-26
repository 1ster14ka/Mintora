import axios from 'axios';
import { apiKey } from './data';

export async function historySales(chain, contract, identifier) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/events/chain/${chain}/contract/${contract}/nfts/${identifier}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        event_type: 'sale',
        limit: 20,
      },
    }
  );

  return response.data.asset_events;
}
