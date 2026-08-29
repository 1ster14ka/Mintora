import axios from 'axios';
import { apiKey } from './data';

export async function getAccountActivity(address) {
  const response = await axios.get(
    `https://api.opensea.io/api/v2/events/accounts/${address}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        limit: 20,
        event_type: ['sale', 'transfer', 'listing', 'offer'],
      },
    }
  );

  return response.data;
}
