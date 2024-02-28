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
        // Send image data to server for processing
        const response = await fetch('/process-image', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Failed to process image');
        }

        const resultData = await response.json();

        // Display result image
        resultImage.innerHTML = `<img src="${resultData.resultUrl}" alt="Result Image">`;
        resultSection.classList.remove('hidden');
    } catch (error) {
        console.error(error.message);
        alert('An error occurred while processing the image.');
    } finally {
        // Hide loader
        loader.style.display = 'none';
    }
}

