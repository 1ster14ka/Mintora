// export function getTimeRemaining(time) {
//   const now = new Date();
//   const end = new Date(time);
//   const difference = end - now;
//   if (difference <= 0) {
//     return {
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//     };
//   }
//   const totalSeconds = Math.floor(difference / 1000);
//   const hours = Math.floor(totalSeconds / 3600);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const seconds = totalSeconds % 60;
//   return {
//     hours,
//     minutes,
//     seconds,
//   };
// }

// export function updateTimers(elements, data) {
//   const idInterval = setInterval(() => {
//     elements.forEach(el => {
//       const obj = data.find(({ id }) => id === Number(el.dataset.id));

//       const { hours, minutes, seconds } = getTimeRemaining(obj.auctionEnd);
//       const timer = el.querySelector('.nft__timer');
//       const spans = timer.querySelectorAll('span');

//       spans[0].textContent = formatTime(hours, 'H');
//       spans[1].textContent = formatTime(minutes, 'm');
//       spans[2].textContent = formatTime(seconds, 's');
//     });
//   }, 1000);
// }

// export function formatTime(value, suffix) {
//   return `${String(value).padStart(2, '0')}${suffix}`;
// }
