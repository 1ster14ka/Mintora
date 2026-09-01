import { markupAccount, markupActivities } from './components/account-markup';
import { loaderHide, loaderShow } from './components/loader';
import { markupNftCard } from './components/nft-card';
import { getAccountActivity } from './utils/activity-api';
import { getAccountCollections } from './utils/collections-api';
import { getInfoOwner } from './utils/owner-api';

const params = new URLSearchParams(window.location.search);

const address = params.get('address');
const container = document.querySelector('.container-account');
const trigger = document.querySelector('.load-more-trigger');
const loaderEl = document.querySelector('.loader');
let isCollectionOpen = true;

let isLoading = false;
let collectionCursor = null;
let activitiesCursor = null;
let userName;

async function initAccount() {
  isLoading = true;
  loaderShow(loaderEl);

  try {
    const [info, collections, activities] = await Promise.all([
      getInfoOwner(address),
      getAccountCollections(address),
      getAccountActivity(address),
    ]);
    userName = info.display_name;
    collectionCursor = collections.next;
    activitiesCursor = activities.next;

    container.innerHTML = markupAccount(info, collections, activities);
    const btnAction = document.querySelector('.creator__collection-wrapper');
    const collectionList = document.querySelector('.creator__collection-list');
    const activityList = document.querySelector('.creator__activity-list');

    btnAction.addEventListener('click', event => {
      const btns = [...document.querySelectorAll('.creator__btn-action')];
      const btn = event.target.closest('.creator__btn-action');
      if (!btn) return;

      if (btn.classList.contains('creator__btn-collection')) {
        openList(btns[0], btns[1]);
        openList(collectionList, activityList);
        isCollectionOpen = true;

        return;
      }
      isCollectionOpen = false;
      openList(btns[1], btns[0]);
      openList(activityList, collectionList);
      return;
    });
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
    loaderHide(loaderEl);
  }
}

async function loadMoreCollections() {
  if (!collectionCursor || isLoading) return;
  const loaderCollection = document.querySelector('.loader-collection');

  try {
    isLoading = true;
    loaderShow(loaderCollection);

    const result = await getAccountCollections(address, collectionCursor);

    const collectionList = document.querySelector('.creator__collection-list');

    collectionCursor = result.next;
    collectionList.insertAdjacentHTML(
      'beforeend',
      markupNftCard(result.collections)
    );
  } catch (error) {
    console.log(error);
  } finally {
    loaderHide(loaderCollection);
    isLoading = false;
  }
}

async function loadMoreActivities() {
  if (!activitiesCursor || isLoading) return;
  const loaderCollection = document.querySelector('.loader-collection');

  try {
    isLoading = true;
    loaderShow(loaderCollection);

    const result = await getAccountActivity(address, activitiesCursor);

    const ActivityList = document.querySelector('.creator__activity-list');

    activitiesCursor = result.next;
    ActivityList.insertAdjacentHTML(
      'beforeend',
      markupActivities(result.asset_events, userName)
    );
  } catch (error) {
    console.log(error);
  } finally {
    loaderHide(loaderCollection);
    isLoading = false;
  }
}

initAccount();

function openList(el, removeEl) {
  el.classList.add('is-open');
  removeEl.classList.remove('is-open');
}

const observer = new IntersectionObserver(
  entries => {
    if (!entries[0].isIntersecting || isLoading) return;

    if (isCollectionOpen) {
      loadMoreCollections();
    } else {
      loadMoreActivities();
    }
  },
  {
    rootMargin: '400px',
  }
);

observer.observe(trigger);
