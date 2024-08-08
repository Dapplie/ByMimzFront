
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Slider</title>
  <style>
    .slider {
      position: relative;
      width: 100%;
   
      margin: auto;
      overflow: hidden;
    }

    .slides {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .slides img {
      width: 100vw; /* Fit each image to the viewport width */
      height: auto;
      flex: 0 0 auto;
    }

    .slider-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    .left-half, .right-half {
      width: 50%;
      height: 100%;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="slider">
    <div class="slides">
      <img src="./assets/fashion.jpg" alt="Image 1">
      <img src="./assets/fashion3.jpg" alt="Image 2">
      <img src="./assets/fashion2.jpg" alt="Image 3">
    </div>
    <div class="slider-overlay">
      <div class="left-half"></div>
      <div class="right-half"></div>
    </div>
  </div>

  <script>
    let slides, images, leftHalf, rightHalf;
    let currentIndex = 0;
    let interval;

    function initializeSlider() {
      slides = document.querySelector('.slides');
      images = document.querySelectorAll('.slides img');
      leftHalf = document.querySelector('.left-half');
      rightHalf = document.querySelector('.right-half');

      const totalSlides = images.length;
      const firstImageClone = images[0].cloneNode(true);
      const lastImageClone = images[totalSlides - 1].cloneNode(true);

      slides.appendChild(firstImageClone);
      slides.insertBefore(lastImageClone, slides.firstChild);

      function updateSlidePosition() {
        const slideWidth = images[0].clientWidth;
        slides.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
      }

      function showNextSlide() {
        currentIndex++;
        updateSlidePosition();
        if (currentIndex === totalSlides) {
          setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = 0;
            updateSlidePosition();
            slides.offsetHeight; // Force reflow
            slides.style.transition = 'transform 0.5s ease-in-out';
          }, 500);
        }
      }

      function showPrevSlide() {
        currentIndex--;
        updateSlidePosition();
        if (currentIndex === -1) {
          setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = totalSlides - 1;
            updateSlidePosition();
            slides.offsetHeight; // Force reflow
            slides.style.transition = 'transform 0.5s ease-in-out';
          }, 500);
        }
      }

      rightHalf.addEventListener('click', showNextSlide);
      leftHalf.addEventListener('click', showPrevSlide);

      interval = setInterval(showNextSlide, 3000);

      window.addEventListener('resize', updateSlidePosition);
      updateSlidePosition();
    }

    function cleanupSlider() {
      clearInterval(interval);
      if (leftHalf && rightHalf) {
        leftHalf.removeEventListener('click', showPrevSlide);
        rightHalf.removeEventListener('click', showNextSlide);
      }
      window.removeEventListener('resize', updateSlidePosition);
    }

    // Initialize slider on page load
    initializeSlider();

    // Cleanup function if needed when navigating away
    // cleanupSlider();
  </script>
</body>

