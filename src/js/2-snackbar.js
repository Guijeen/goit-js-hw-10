//  Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', hadlerPromise);

function hadlerPromise(event) {
  event.preventDefault();
  const delay = +event.target.elements.delay.value;
  const state = event.target.elements.state.value;
  console.log(state);

  setTimeout(() => {
    new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    })
      .then(date => {
        iziToast.show({
          message: `✅ Fulfilled promise in ${date}ms`,
          color: 'green',
          position: 'topRight',
        });
      })
      .catch(error => {
        iziToast.show({
          message: `❌ Rejected promise in ${delay}ms`,
          color: 'red',
          position: 'topRight',
        });
      });
  }, delay);
}
