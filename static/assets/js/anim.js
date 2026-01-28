const initAnimations = () => {
  // Entry Animation Stagger
  const animateElements = document.querySelectorAll('.animate-in');
  if (animateElements.length > 0) {
      animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100 + index * 100);
      });
  } else {
    // Retry if elements not found (just in case of weird parsing timing, though unlikely with bottom script)
    setTimeout(initAnimations, 50);
    return;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
