import { markupAccount } from './components/account-markup';
import { getAccountActivity } from './utils/activity-api';
import { getAccountCollections } from './utils/collections-api';
import { getInfoOwner } from './utils/owner-api';

const params = new URLSearchParams(window.location.search);

const address = params.get('address');
const container = document.querySelector('.container-account');

console.log(address);

async function initAccount() {
  try {
    const [info, collections, activities] = await Promise.all([
      await getInfoOwner(address),
      await getAccountCollections(address),
      await getAccountActivity(address),
    ]);
    console.log(info);
    console.log(collections);
    console.log(activities);
    container.innerHTML = markupAccount(info, collections, activities);
  } catch (error) {
    console.log(error);
  }
}

initAccount();
