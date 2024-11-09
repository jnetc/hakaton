"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('image-preview');
    imageInput.addEventListener('change', event => {
        var _a, _b;
        const el = event.target;
        // Clear any previous image preview
        (_a = el.nextElementSibling) === null || _a === void 0 ? void 0 : _a.remove();
        const file = (_b = el.files) === null || _b === void 0 ? void 0 : _b[0];
        if (file) {
            const reader = new FileReader();
            // Set up the onload event to display the image preview
            reader.onload = (e) => {
                var _a;
                const img = document.createElement('img');
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    img.src = e.target.result;
                }
                imagePreview.insertAdjacentElement('beforeend', img);
            };
            // Read the selected image as a data URL
            reader.readAsDataURL(file);
        }
    });
});
//# sourceMappingURL=uploadImage.js.map