/* eslint-disable guard-for-in */
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.store('data', {
  users: JSON.parse(localStorage.getItem('users')) || {},
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
  },
});

Alpine.store('behavior_methods', {
  data: Alpine.store('data'),
  verifyEmail() {
    return !Object.prototype.hasOwnProperty.call(
      this.data.users,
      this.data.inputs.email.value,
    );
  },
  verifyPassword() {
    return this.data.inputs.password.value !== this.data.users[this.data.email.value];
  },
  completeInput(element, value) {
    const input = this.data.inputs[element.id];

    element.checkValidity();
    input.completed = Boolean(value);
    input.error = !element.validity.valid;
  },
  inputChange() {
    if (!Object.values(this.data.inputs).some((input) => input.error)) {
      Object.keys(this.data.inputs).forEach((name) => {
        this.data.inputs[name].error = false;
      });
    }
  },
  submit() {
    if (this.verifyEmail()) {
      this.data.inputs.email.error = true;
      this.data.inputs.password.value = '';
      this.data.inputs.password.completed = false;
    } else if (this.verifyPassword()) {
      this.data.inputs.password.error = true;
    }
  },
});

Alpine.store('condition_methods', {
  isAnyPropertyTrue(prop) {
    return Alpine.store('data').inputs.email[prop] || Alpine.store('data').inputs.password[prop];
  },
});

Alpine.start();
