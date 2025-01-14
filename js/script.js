// Console log to confirm the script is running
// this works as a checker
console.log("VoyageVinyl script.js loaded successfully.");

// Console log to check if popup is shown
console.log("Popup status in localStorage:", localStorage.getItem("popupShown"));

/* Popup Functionality */
// Trigger popup ONCE ONLY when the page loads
// Check if the popup has already been shown during this session
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");

  // Check if popup has been shown before
  if (popup) {
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
      popup.classList.add("show"); // Show popup if not yet shown
      localStorage.setItem("popupShown", "true"); // Mark popup as shown
    } else {
      popup.classList.remove("show"); // Ensure it stays hidden
    }
  }
});

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("show");
  }
}

// Image carousell functionality including indicators and buttons
document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page is index.html and only runs on the index.html page
  if (window.location.pathname.endsWith("index.html")) {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    if (carousel && slides.length > 0) {
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
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      }

      // Show previous slide
      function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
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

      // Initialise carousel
      updateCarousel();
    }
  }
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

/* Featured Video Alert */
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
    // stops the errors from javascript not being able to run popups in other html pages
    if (window.location.pathname.endsWith("index.html")) {
      document.getElementById("popup").classList.add("show");
    }
  };
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("popup").classList.remove("show");
  }


  // Toggle Hamburger Menu for mobile/tablet view ports
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
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
  
  // Function for scrollToSection within a page
  // Used in Hero Section -> MV Section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // store.html pagination function
  document.addEventListener("DOMContentLoaded", function () {
    const paginationLinks = document.querySelectorAll(".page-number");
  
    paginationLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent actual navigation
  
        // Remove the 'active' class from all links
        paginationLinks.forEach(link => link.classList.remove("active"));
  
        // Add the 'active' class to the clicked link, if not a disabled/ellipsis button
        if (!this.classList.contains("disabled") && !this.dataset.page.includes("ellipsis")) {
          this.classList.add("active");
        }
      });
    });
  });

  // store.html disable error popup for email address in the fake search bar
  document.addEventListener("DOMContentLoaded", function () {
    // Check if the current page is store.html
    if (window.location.pathname.endsWith("store.html")) {
      const searchBar = document.querySelector(".search-bar");
  
      if (searchBar) {
        // Prevent the form from being submitted
        searchBar.addEventListener("submit", function (e) {
          e.preventDefault();
        });
  
        // Prevent the Enter key from triggering form submission
        searchBar.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        });
      }
    }
  });

  // product.html allowing the user to zoom into the image
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("product.html")) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const productImg = document.getElementById("product-image");
    const closeModal = document.querySelector(".close-modal");

    // Function to disable scrolling 
    // when the user is inside the modal disable scrolling
    function disableScrolling() {
        document.body.style.overflow = "hidden";
    }

    // Function to enable scrolling
    function enableScrolling() {
        document.body.style.overflow = "auto";
    }

    // Open modal when the product image is clicked
    productImg.addEventListener("click", function () {
        modal.style.display = "flex"; // Show modal
        modalImg.src = this.src; // Set modal image source
        disableScrolling(); // Disable scrolling
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
        enableScrolling(); // Enable scrolling
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; // Hide modal
            enableScrolling(); // Enable scrolling
        }
    });
  }
});




