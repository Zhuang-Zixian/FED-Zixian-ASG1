// Console log to confirm the script is running
// this works as a checker
console.log("VoyageVinyl script.js loaded successfully.");

/* Popup Functionality */
// Trigger popup when the page loads
window.onload = function () {
  const popup = document.querySelector("#popup");
  if (popup) {
    popup.classList.add("show");
  }
};

// Close popup functionality (if a popup exists in your HTML)
function closePopup() {
  const popup = document.querySelector("#popup");
  if (popup) {
    popup.classList.remove("show");
  }
}

// Image carousell functionality including indicators and buttons
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const totalSlides = slides.length;
  
    let currentSlide = 0;
  
    // Function to update carousel position and active indicator
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
      });
    }
  
    // Show next slide
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }
  
    // Show previous slide
    function showPrevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }
  
    // Auto-slide every 4 seconds
    let autoSlide = setInterval(showNextSlide, 4000);
  
    // Event listeners for navigation arrows
    prevButton.addEventListener("click", function () {
      clearInterval(autoSlide); // Stop auto-slide on manual interaction
      showPrevSlide();
      autoSlide = setInterval(showNextSlide, 4000); // Restart auto-slide
    });
  
    nextButton.addEventListener("click", function () {
      clearInterval(autoSlide); // Stop auto-slide on manual interaction
      showNextSlide();
      autoSlide = setInterval(showNextSlide, 4000); // Restart auto-slide
    });
  
    // Event listeners for circle indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", function () {
        clearInterval(autoSlide); // Stop auto-slide on manual interaction
        currentSlide = index;
        updateCarousel();
        autoSlide = setInterval(showNextSlide, 4000); // Restart auto-slide
      });
    });
  
    // Initialize carousel
    updateCarousel();
  });
    
/* Newsletter Signup Form Validation */
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector("form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const emailInput = document.querySelector("#email");
      if (emailInput && emailInput.value.trim() !== "") {
        alert("Thank you for signing up!"); // Placeholder success message
        emailInput.value = ""; // Clear the input field
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
});

/* Navigation Highlighting (Optional) */
// Add active class to navigation links based on the current URL
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* Product Click Placeholder */
// Add click events to products for potential expansion
document.querySelectorAll(".product").forEach((product) => {
  product.addEventListener("click", () => {
    alert("Product details coming soon!"); // Placeholder action
  });
});

/* Featured Video Alert (Optional) */
// Display an alert when a user interacts with the featured video
const featuredVideo = document.querySelector("video");
if (featuredVideo) {
  featuredVideo.addEventListener("play", () => {
    console.log("User started watching the featured video.");
  });
}

/* Index.html popup for reducing CTR -> click through rate */
// Show the popup when the page loads
window.onload = function () {
    document.getElementById("popup").classList.add("show");
  };
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("popup").classList.remove("show");
  }

  // Toggle Hamburger Menu for mobile/tablet view ports
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });


// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");
  
    // Show button when scrolled down
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    // Scroll smoothly to the top when clicked
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  
  // New Arrivals Section (JS)
  function showProducts(category) {
    // Target only the tabs and product lists within the "New Arrivals" section
    const tabs = document.querySelectorAll(".new-arrivals .tab");
    const productLists = document.querySelectorAll(".new-arrivals .product-list");
  
    // Remove active class from all tabs
    tabs.forEach((tab) => tab.classList.remove("active"));
  
    // Add active class to the clicked tab
    document
      .querySelector(`button[onclick="showProducts('${category}')"]`)
      .classList.add("active");
  
    // Hide all product lists
    productLists.forEach((list) => list.classList.remove("active"));
  
    // Show the selected product list
    document.getElementById(category).classList.add("active");
  }
  
  
  