// Hotspot click handler - works on both desktop (hover) and mobile (click/tap)
if (typeof window !== 'undefined') {
  const initHotspots = () => {
    const hotspotGroups = document.querySelectorAll('.hotspot-group');

    // Exit if no hotspots found yet, retry shortly
    if (hotspotGroups.length === 0) {
      setTimeout(initHotspots, 100);
      return;
    }

    let activeHotspot = null;
    let overlay = null;

    // Create overlay element (for mobile backdrop)
    function createOverlay() {
      if (overlay) return overlay;
      overlay = document.createElement('div');
      overlay.className = 'hotspot-overlay';
      document.body.appendChild(overlay);
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

    // Inject a close button inside each tooltip (used on mobile sheet)
    function injectCloseButtons() {
      hotspotGroups.forEach(group => {
        const tooltip = group.querySelector('.hotspot-tooltip');
        if (tooltip && !tooltip.querySelector('.hotspot-tooltip-close')) {
          const closeBtn = document.createElement('button');
          closeBtn.className = 'hotspot-tooltip-close';
          closeBtn.setAttribute('aria-label', 'Close');
          closeBtn.innerHTML = '&times;';
          closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeActiveHotspot();
          });
          tooltip.insertBefore(closeBtn, tooltip.firstChild);
        }
      });
    }

    // Initialize
    createOverlay();
    injectCloseButtons();

    hotspotGroups.forEach(group => {
      const button = group.querySelector('.hotspot');

      if (button) {
        let lastTouchTime = 0;

        const handleOpen = (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Toggle off if same hotspot tapped again
          if (activeHotspot === group) {
            closeActiveHotspot();
            return;
          }

          closeActiveHotspot();

          group.classList.add('active');
          activeHotspot = group;

          // Show overlay on mobile
          if (isMobile() && overlay) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
        };

        // touchend fires before click on mobile — record time to prevent double-fire
        button.addEventListener('touchend', (e) => {
          lastTouchTime = Date.now();
          handleOpen(e);
        }, { passive: false });

        // click fires after touchend on mobile — skip if touch was recent (< 400ms)
        button.addEventListener('click', (e) => {
          if (Date.now() - lastTouchTime < 400) return;
          handleOpen(e);
        });
      }
    });

    // Close when clicking outside any hotspot group or overlay
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

    // On resize from mobile to desktop, remove overlay active state
    window.addEventListener('resize', () => {
      if (!isMobile() && overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHotspots);
  } else {
    initHotspots();
  }
}
