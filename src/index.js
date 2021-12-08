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

Alpine.store('methods', {
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
  completeInput(name) {
    this.data.inputs[name].completed = Boolean(this.data.inputs[name].value);
  },
  inputChange() {
    if (!Object.values(this.data.inputs).some((input) => input.error)) {
      Object.keys(this.data.inputs).forEach((name) => {
        this.data.inputs[name].error = false;
      });
    }
  },
  isAnyPropertyTrue(prop) {
    return this.data.inputs.email[prop] || this.data.inputs.password[prop];
  },
  submit() {
    console.log('fsdf');
    if (this.verifyEmail()) {
      this.data.inputs.email.error = true;
      this.data.inputs.password.value = '';
      this.data.inputs.password.completed = false;
    } else if (this.verifyPassword()) {
      this.data.inputs.password.error = true;
    }
  },
});

// function form() {
//   return {
//     users: JSON.parse(localStorage.getItem('users')) || {},
//     inputs: {
//       email: {
//         value: '',
//         error: false,
//         completed: false,
//       },
//       password: {
//         value: '',
//         error: false,
//         completed: false,
//       },
//     },
//     verifyEmail() {
//       return !Object.prototype.hasOwnProperty.call(
//         this.users,
//         this.inputs.email.value,
//       );
//     },
//     verifyPassword() {
//       return this.inputs.password.value !== this.users[this.email.value];
//     },
//     completeInput(name) {
//       this.inputs[name].completed = Boolean(this.inputs[name].value);
//     },
//     inputChange() {
//       if (!Object.values(this.inputs).some((input) => input.error)) {
//         Object.keys(this.inputs).forEach((name) => {
//           this.inputs[name].error = false;
//         });
//       }
//     },
//     isAnyPropertyTrue(prop) {
//       return this.inputs.email[prop] || this.inputs.password[prop];
//     },
//     submit() {
//       if (this.verifyEmail()) {
//         this.inputs.email.error = true;
//         this.inputs.password.value = '';
//         this.inputs.password.completed = false;
//       } else if (this.verifyPassword()) {
//         this.inputs.password.error = true;
//       }
//     },
//   };
// }

// Alpine.data('form', form);

Alpine.start();
