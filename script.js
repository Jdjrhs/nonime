// Wait for everything (images, scripts, etc.) to load
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  // Hide the loading screen
  loadingScreen.style.opacity = '0';
  loadingScreen.style.transition = 'opacity 0.5s ease-out';

  // Wait for the fade-out transition, then remove loading screen
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
    mainContent.classList.add('visible');
  }, 500); // Match the transition duration
});
