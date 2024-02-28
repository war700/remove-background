function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        const uploadLabel = document.querySelector('.upload-label');
        uploadLabel.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
    };
    reader.readAsDataURL(file);
}

async function removeBackground() {
    const fileInput = document.getElementById('file-input');
    const resultSection = document.getElementById('result');
    const resultImage = document.getElementById('result-image');
    const loader = document.getElementById('loader');

    // Check if a file is selected
    if (!fileInput.files || !fileInput.files[0]) {
        alert('Please select an image file.');
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);

    // Display loader
    loader.style.display = 'inline-block';

    try {
        // Simulate processing delay (for demonstration purposes)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate success (for demonstration purposes)
        const imageUrl = URL.createObjectURL(file);
        resultImage.innerHTML = `<img src="${imageUrl}" alt="Result Image">`;
        resultSection.classList.remove('hidden');
    } catch (error) {
        console.error(error.message);
        alert('An error occurred while processing the image.');
    } finally {
        // Hide loader
        loader.style.display = 'none';
    }
}


