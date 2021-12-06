import Alpine from 'alpinejs';

window.Alpine = Alpine;

function form() {
  return {
    users: {},
    email: {
      value: '',
      error: false,
    },
    password: {
      value: '',
      error: false,
    },
    init() {
      this.users = JSON.parse(localStorage.getItem('users'));
    },
    verifyEmail() {
      return !Object.prototype.hasOwnProperty.call(this.users, this.email.value);
    },
    submit() {
      if (this.verifyEmail()) {
        this.email.error = true;
      } else if (this.password.value !== this.users[this.email.value]) {
        this.value.error = true;
      }
    },
  };
}

Alpine.data('form', form);

Alpine.start();
