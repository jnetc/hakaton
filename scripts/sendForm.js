"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('complain-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log('seding form');
    });
});
//# sourceMappingURL=sendForm.js.map