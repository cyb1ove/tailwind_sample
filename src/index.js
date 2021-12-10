/* eslint-disable guard-for-in */
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.store('data', {
  inputs: {
    email: {
      value: '',
      error: false,
      completed: false,
    },
    password: {
      value: '',
      error: false,
      completed: false,
    },
    registration: false,
    message: 'Welcome',
  },
});

Alpine.store('behavior_methods', {
  data: Alpine.store('data'),
  verifyUser() {
    const email = this.data.inputs.email.value;

    return Boolean(localStorage.getItem(email));
  },
  verifyPassword() {
    const email = this.data.inputs.email.value;
    const password = this.data.inputs.password.value;

    return password === localStorage.getItem(email);
  },
  completeInput(element) {
    const input = this.data.inputs[element.id];

    element.setCustomValidity('');
    element.checkValidity();

    input.completed = Boolean(input.value);
    input.error = !element.validity.valid;
  },
  inputChange(element) {
    const input = this.data.inputs[element.id];

    input.completed = false;

    if (!input.value) {
      input.error = false;
    }
  },
  showError(element) {
    if (!element.value) {
      element.setCustomValidity(`Enter the ${element.id}`);
    }
  },
  submit() {
    if (this.data.inputs.registration) {
      localStorage.setItem(this.data.inputs.email.value, this.data.inputs.password.value);
      this.data.inputs.registration = false;

      return;
    }

    if (!this.verifyUser()) {
      this.data.inputs.registration = true;
      this.data.inputs.message = 'Registration';
    } else {
      this.data.inputs.email.error = false;
    }

    if (!this.verifyPassword()) {
      this.data.inputs.password.error = true;
      this.data.inputs.password.value = '';
      this.data.inputs.password.completed = false;
      this.data.inputs.message = 'Incorrect password';
    } else {
      this.data.inputs.email.error = false;
      this.data.inputs.email.completed = false;
      this.data.inputs.email.value = '';
      this.data.inputs.password.error = false;
      this.data.inputs.password.completed = false;
      this.data.inputs.password.value = '';

      this.data.inputs.message = "You're are signed";
    }
  },
});

Alpine.store('condition_methods', {
  isAnyPropertyTrue(prop) {
    return Object.values(Alpine.store('data').inputs).some((currentInput) => currentInput[prop]);
  },
});

Alpine.start();
