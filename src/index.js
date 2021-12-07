import Alpine from 'alpinejs';

window.Alpine = Alpine;

function form() {
  return {
    users: {},
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
    init() {
      this.users = JSON.parse(localStorage.getItem('users')) || {};
    },
    verifyEmail() {
      return !Object.prototype.hasOwnProperty.call(
        this.users,
        this.email.value,
      );
    },
    verifyPassword() {
      return this.password.value !== this.users[this.email.value];
    },
    isAnyPropertyTrue(prop) {
      return this.email[prop] || this.password[prop];
    },
    submit() {
      if (this.verifyEmail()) {
        this.email.error = true;
        this.password.value = '';
        this.password.completed = false;
      } else if (this.verifyPassword()) {
        this.value.error = true;
      }
    },
  };
}

Alpine.data('form', form);

Alpine.start();
