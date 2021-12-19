/* eslint-disable no-param-reassign */

import Alpine from 'alpinejs';

window.Alpine = Alpine;

function getMethods() {
  return {
    completeInput(element) {
      element.setCustomValidity('');
      element.checkValidity();

      return element.validity.valid && !element.validity.valueMissing;
    },
    inputChange(element) {
      element.setCustomValidity('');
      element.checkValidity();
      console.log(element.validity);

      return element.validity.valid;
    },
    showError(element) {
      if (!element.value) {
        element.setCustomValidity(`Enter the ${element.id}`);
      }
    },
    clearInput(input) {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    },
    login(password, form) {
      if (!password) {
        this.clearInput(form.password);

        return form.email.id;
      }

      if (password !== form.password.value) {
        console.log(password, form.password.value);
        return form.password.id;
      }

      this.clearInput(form.email);
      this.clearInput(form.password);
      console.log('Success');

      return false;
    },
    registration(password, form) {
      if (password) {
        this.clearInput(form.password);
        this.clearInput(form.repassword);

        return form.email.id;
      }

      if (form.password.value !== form.repassword.value) {
        return form.repassword.id;
      }

      localStorage.setItem(form.email.value, form.password.value);
      window.location.href = 'login.html';

      return false;
    },
    emailForgottenPassword(password, form) {
      if (!password) {
        this.clearInput(form.email);

        return form.email.id;
      }

      this.clearInput(form.email);

      return false;
    },
    submit(form) {
      const password = localStorage.getItem(form.email.value);

      if (form.id === 'login') {
        return this.login(password, form);
      }

      if (form.id === 'sign up') {
        return this.registration(password, form);
      }

      if (form.id === 'email me') {
        return this.emailForgottenPassword(password, form);
      }

      return new Error('Error');
    },
  };
}

Alpine.data('getMethods', getMethods);
Alpine.start();
