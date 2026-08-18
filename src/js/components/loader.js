const loaderEl = document.querySelector('.loader');

export function loaderHide() {
  loaderEl.style.display = 'none';
}

export function loaderShow() {
  loaderEl.style.display = 'block';
}
