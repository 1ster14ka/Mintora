import { getCollectionNfts } from './nfts-api';
import { getTopCollections } from './top-collection-api';

export async function weeklyNft() {
  const response = await getTopCollections(20, 'seven_days');

  const result = await Promise.all(
    response.map(collection => getCollectionNfts(collection.id))
  );

  return result
    .flatMap(el => el.nfts)
    .filter(el => el.image_url)
    .map(el => {
      return {
        ...el,
        floorPrice: el.floorPrice || null,
      };
    });
}
