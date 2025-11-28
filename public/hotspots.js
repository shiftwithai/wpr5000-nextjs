// Hotspot click handler for mobile with overlay
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const hotspotGroups = document.querySelectorAll('.hotspot-group');
    let activeHotspot = null;
    let overlay = null;

    // Create overlay element
    function createOverlay() {
      if (overlay) return overlay;
      overlay = document.createElement('div');
      overlay.className = 'hotspot-overlay';
      document.body.appendChild(overlay);
      
      // Close on overlay click
      overlay.addEventListener('click', closeActiveHotspot);
      
      return overlay;
    }

    function closeActiveHotspot() {
      if (activeHotspot) {
        activeHotspot.classList.remove('active');
        activeHotspot = null;
      }
      if (overlay) {
        overlay.classList.remove('active');
      }
      document.body.style.overflow = '';
    }

    function isMobile() {
      return window.innerWidth < 768;
    }

    // Initialize overlay
    createOverlay();

    hotspotGroups.forEach(group => {
      const button = group.querySelector('.hotspot');
      
      if (button) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          // If clicking the same hotspot, close it
          if (activeHotspot === group) {
            closeActiveHotspot();
            return;
          }
          
          // Close any previously active hotspot
          closeActiveHotspot();
          
          // Open the clicked hotspot
          group.classList.add('active');
          activeHotspot = group;
          
          // Show overlay on mobile
          if (isMobile() && overlay) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
        });
      }
    });
    
    // Close hotspots when clicking outside (but not on mobile with overlay)
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hotspot-group') && !e.target.closest('.hotspot-overlay')) {
        closeActiveHotspot();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeActiveHotspot();
      }
    });

    // Handle resize - close mobile popup when switching to desktop
    window.addEventListener('resize', () => {
      if (!isMobile() && activeHotspot) {
        if (overlay) {
          overlay.classList.remove('active');
        }
        document.body.style.overflow = '';
      }
    });
  });
}
