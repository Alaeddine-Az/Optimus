// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements that should animate on scroll
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  // Function to check if an element is in the viewport
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  // Add the 'animate' class when the element is in view
  const displayScrollElement = (element) => {
    element.classList.add("animate");
  };

  // Loop through elements and animate when in view
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  // Listen for scroll events
  window.addEventListener("scroll", handleScrollAnimation);

  // Trigger animation on page load in case elements are already in view
  handleScrollAnimation();
});
