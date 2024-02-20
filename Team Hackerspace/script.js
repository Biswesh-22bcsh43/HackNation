function uploadImage() {
    const input = document.getElementById('uploadInput');
    const imageContainer = document.getElementById('imageContainer');
    const resultContainer = document.getElementById('resultContainer');
    
    // Clear previous result
    resultContainer.innerHTML = '';
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // Display uploaded image
        const img = new Image();
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        
        // Call function to detect plant
        detectPlant(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function detectPlant(imageData) {
    // Call API or machine learning model to detect plant in the image
    // Display result in resultContainer
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = 'Plant detection result will be displayed here.';
  }