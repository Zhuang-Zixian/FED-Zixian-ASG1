// Console log to confirm the script is running
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
