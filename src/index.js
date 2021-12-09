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
  },
});

Alpine.store('behavior_methods', {
  data: Alpine.store('data'),
  verifyEmail() {
    const email = this.data.inputs.email.value;

    return !localStorage.getItem(email);
  },
  verifyPassword() {
    const email = this.data.inputs.email.value;
    const password = this.data.inputs.password.value;

    return password !== localStorage.getItem(email);
  },
  completeInput(element) {
    const input = this.data.inputs[element.id];

    element.checkValidity();

    input.completed = Boolean(input.value);

    if (!input.error) {
      input.error = !element.validity.valid;
    }
  },
  inputChange(element) {
    const input = this.data.inputs[element.id];

    if (!Alpine.store('condition_methods').isAnyPropertyTrue('error')) {
      Object.keys(this.data.inputs).forEach((name) => {
        this.data.inputs[name].error = false;
      });
    }

    input.completed = false;

    if (!input.value) {
      input.error = false;
    }
  },
  submit() {
    if (this.verifyEmail()) {
      this.data.inputs.email.error = true;
      this.data.inputs.password.value = '';
      this.data.inputs.password.completed = false;
    } else {
      this.data.inputs.email.error = false;
    }

    if (this.verifyPassword) {
      this.data.inputs.password.error = true;
    }
  },
});

Alpine.store('condition_methods', {
  isAnyPropertyTrue(prop) {
    return Object.values(Alpine.store('data').inputs).some((currentInput) => currentInput[prop]);
  },
});

Alpine.start();
