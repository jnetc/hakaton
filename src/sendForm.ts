document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('complain-form') as HTMLFormElement;

  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('seding form');
  });
});
