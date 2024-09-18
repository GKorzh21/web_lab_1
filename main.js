function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
});

document.addEventListener("DOMContentLoaded", function() {
    const indicators = document.querySelectorAll(".carousel-indicators button");
    const slides = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
  
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      indicators.forEach(indicator => indicator.classList.remove("active"));
  
      slides[index].classList.add("active");
      indicators[index].classList.add("active");
  
      currentSlide = index;
    }
  
    prevButton.addEventListener("click", function() {
      let newIndex = currentSlide - 1;
      if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      showSlide(newIndex);
    });
  
    nextButton.addEventListener("click", function() {
      let newIndex = currentSlide + 1;
      if (newIndex >= slides.length) {
        newIndex = 0;
      }
      showSlide(newIndex);
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", function() {
        showSlide(index);
      });
    });
  });
