import axios from 'axios';
import { markupNftCard } from '../components/nft-card';
import { getTrendingCollections } from './collections-api';
import { apiKey, collections } from './data';
import { getExploreNfts } from './nfts-api';

export async function getDiscoverNfts(cursor = null) {
  const response = await axios.get('https://api.opensea.io/api/v2/events', {
    headers: {
      'x-api-key': apiKey,
    },
    params: {
      event_type: 'listing',
      limit: 100,
      ...(cursor && { next: cursor }),
    },
  });

  return {
    collection: response.data.asset_events.map(event => event.asset.collection),
    nfts: response.data.asset_events
      .map(event => event.asset)
      .filter(nft => {
        const img = nft?.image_url?.trim();
        if (!img) return false;

        return !img.toLowerCase().split('?')[0].endsWith('.mp4');
      }),
    next: response.data.next,
  };
}
