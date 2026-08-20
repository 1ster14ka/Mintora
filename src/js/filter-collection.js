export function renderCollectionFilter(wrapper, collections) {
  if (!wrapper) return;

  wrapper.innerHTML = `
    ${markupCollectionButtons(collections)}
    <button data-more="true">Load More</button>
  `;
  isOpenWrapper(wrapper);
}

function markupCollectionButtons(collections) {
  return collections
    .map(collection => {
      return `<button data-id="${collection}">${formatCollectionName(collection)}</button>`;
    })
    .join('');
}

function formatCollectionName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function isOpenWrapper(wrapper) {
  wrapper.classList.add('is-open');
}
export function closeWrapper(wrapper) {
  wrapper.classList.remove('is-open');
}
