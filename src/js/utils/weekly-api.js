import { getCollectionNfts } from './nfts-api';
import { getTopCollections } from './top-collection-api';

export async function weeklyNft() {
  const response = await getTopCollections(20, 'seven_days');

  const result = await Promise.all(
    response.map(async collection => {
      const nft = await getCollectionNfts(collection.id);

      return {
        ...nft.nfts[0],
        ...collection,
      };
    })
  );

  return result
    .flatMap(el => el)
    .filter(el => el.image_url)
    .map(el => {
      return {
        ...el,
        floorPrice: el.floorPrice || null,
      };
    });
}
