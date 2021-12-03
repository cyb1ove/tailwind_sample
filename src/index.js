// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

const form = document.getElementById('form');
const email = document.getElementById('email');
// const password = document.getElementById('password');

function submitForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', submitForm);

email.addEventListener('input', () => {
  email.setCustomValidity('');
  email.checkValidity();
});
