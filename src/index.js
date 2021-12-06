import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

function form() {
  return {
    a: 'fsdf',
    b: 3,
  };
}

Alpine.data('form', form);
