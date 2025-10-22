// Utility function to scroll to top of page
export const scrollToTop = () => {
  // Instant scroll to top - no animation, no delays
  window.scrollTo(0, 0);
};

// Utility function for immediate scroll (no animation)
export const scrollToTopImmediate = () => {
  window.scrollTo(0, 0);
};

// Utility function to handle navigation with scroll to top
export const handleNavigation = (callback) => {
  return () => {
    if (callback) {
      callback();
    }
    scrollToTop();
  };
};
