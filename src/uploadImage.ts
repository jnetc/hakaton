document.addEventListener('DOMContentLoaded', () => {
  const imageInput = document.getElementById('image') as HTMLInputElement;
  const imagePreview = document.getElementById('image-preview') as HTMLDivElement;

  imageInput.addEventListener('change', event => {
    const el = event.target as HTMLInputElement;
    // Clear any previous image preview
    el.nextElementSibling?.remove();

    const file = el.files?.[0];

    if (file) {
      const reader = new FileReader();

      // Set up the onload event to display the image preview
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = document.createElement('img');
        if (e.target?.result) {
          img.src = e.target.result as string;
        }

        imagePreview.insertAdjacentElement('beforeend', img);
      };

      // Read the selected image as a data URL
      reader.readAsDataURL(file);
    }
  });
});
