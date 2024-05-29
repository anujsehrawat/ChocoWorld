const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const products = document.querySelectorAll('.product');

let currentIndex = 0;
const slideWidth = products[0].clientWidth;

// Move to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % products.length;
  updateSlider();
}

// Move to previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 ) % products.length;
  updateSlider();
}

// Update slider position
function updateSlider() {
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Automatically move to next slide
setInterval(nextSlide, 2700);

// Button event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide); 

// blur effect for winter special coffee image 
document.querySelector('.product_img1').addEventListener('mouseenter', function() {
    this.classList.add('blur');
  });
  
  document.querySelector('.product_img1').addEventListener('mouseleave', function() {
    this.classList.remove('blur');
  });
  
  // blur effect for valentine special gift box image
  document.querySelector('.product_img2').addEventListener('mouseenter', function() {
    this.classList.add('blur');
  });
  
  document.querySelector('.product_img2').addEventListener('mouseleave', function() {
    this.classList.remove('blur');
  });

   // blur effect for chocolate peanut butter smoothie image
   document.querySelector('.product_img3').addEventListener('mouseenter', function() {
    this.classList.add('blur');
  });
  
  document.querySelector('.product_img3').addEventListener('mouseleave', function() {
    this.classList.remove('blur');
  });