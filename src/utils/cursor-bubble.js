// Custom cursor bubble for ProductSection
export function initCursorBubble() {
  if (
    typeof window === "undefined" ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    return () => {};
  }

  // Create bubble DOM
  const bubble = document.createElement("div");
  bubble.setAttribute("aria-hidden", "true");
  bubble.innerHTML = `
    <div class="cursor-bubble-inner">
      <span class="cursor-text">VIEW</span>
    </div>
  `;
  document.body.appendChild(bubble);

  // Styling via a dynamic style tag
  const style = document.createElement("style");
  style.textContent = `
    .cursor-bubble {
      position: fixed;
      top: 0; left: 0;
      width: 112px; height: 112px;
      margin: -56px 0 0 -56px;
      background-color: rgba(255, 224, 245, 0.92); /* --c-blush at 92% */
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: scale(0);
      will-change: transform, opacity;
      transform-origin: center;
    }
    @media (max-width: 1279px) {
      .cursor-bubble { width: 88px; height: 88px; margin: -44px 0 0 -44px; }
    }
    .cursor-bubble-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      transform: scale(1);
      transition: transform 0.15s ease-out;
    }
    .cursor-star {
      animation: spin 6s linear infinite;
    }
    .cursor-text {
      font-family: var(--f-label);
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: var(--c-plum);
      text-transform: uppercase;
    }
    @keyframes spin { 100% { transform: rotate(360deg); } }
    
    @media (prefers-reduced-motion: reduce) {
      .cursor-star { animation: none; }
      .cursor-bubble { transition: opacity 0.2s, transform 0.2s !important; }
    }
  `;
  document.head.appendChild(style);
  bubble.className = "cursor-bubble";

  const textEl = bubble.querySelector(".cursor-text");
  const innerEl = bubble.querySelector(".cursor-bubble-inner");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  
  let isHoveringCard = false;
  let isExcluded = false;
  let isMouseDown = false;
  
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (prefersReduced) {
      currentX = mouseX;
      currentY = mouseY;
      updateTransform(1, 1, 0);
    }
  };

  const onMouseEnter = () => { isHoveringCard = true; };
  const onMouseLeave = () => { isHoveringCard = false; isExcluded = false; };
  const onExcludeEnter = (e) => { e.stopPropagation(); isExcluded = true; };
  const onExcludeLeave = (e) => { e.stopPropagation(); isExcluded = false; };
  
  const onMouseDown = () => {
    if (!isHoveringCard || isExcluded) return;
    isMouseDown = true;
    textEl.textContent = "OOH";
  };
  
  const onMouseUp = () => {
    isMouseDown = false;
    textEl.textContent = "VIEW";
  };

  const cards = document.querySelectorAll(".custom-cursor-target");
  const excludes = document.querySelectorAll(".cursor-exclude");
  
  cards.forEach(c => {
    c.addEventListener("mouseenter", onMouseEnter);
    c.addEventListener("mouseleave", onMouseLeave);
  });
  
  excludes.forEach(e => {
    e.addEventListener("mouseenter", onExcludeEnter);
    e.addEventListener("mouseleave", onExcludeLeave);
  });

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);

  let lastTime = 0;
  let rAF = null;

  const updateTransform = (scaleX, scaleY, angle) => {
    // Visibility
    let targetScale = (isHoveringCard && !isExcluded) ? 1 : 0;
    
    if (prefersReduced) {
      bubble.style.opacity = targetScale;
      bubble.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      innerEl.style.transform = `scale(${isMouseDown ? 0.85 : 1})`;
    } else {
      bubble.style.opacity = targetScale;
      
      let cssTransform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      let innerTransform = `scale(${isMouseDown ? 0.85 : 1})`;
      
      // Add jelly stretch if visible
      if (targetScale > 0) {
        cssTransform += ` rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
        bubble.style.transition = isHoveringCard && !isExcluded 
          ? "opacity 0.35s cubic-bezier(.34,1.56,.64,1)" 
          : "opacity 0.2s ease-in, transform 0.2s ease-in";
          
        // Counter-rotate the text so it never tilts
        innerTransform = `rotate(-${angle}rad) ` + innerTransform;
      } else {
        bubble.style.transition = "opacity 0.2s ease-in, transform 0.2s ease-in";
        cssTransform += ` scale(0)`;
      }
      
      bubble.style.transform = cssTransform;
      innerEl.style.transform = innerTransform;
    }
  };

  const loop = (time) => {
    if (!prefersReduced) {
      const dt = time - lastTime;
      lastTime = time;
      
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      
      currentX += dx * 0.15;
      currentY += dy * 0.15;
      
      // Calculate speed and stretch
      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      
      // Stretch limits
      const stretch = Math.min(1.15, 1 + speed * 0.005);
      const squash = Math.max(0.9, 1 - speed * 0.005);
      
      updateTransform(stretch, squash, angle);
    }
    rAF = requestAnimationFrame(loop);
  };
  
  rAF = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(rAF);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mousedown", onMouseDown);
    window.removeEventListener("mouseup", onMouseUp);
    cards.forEach(c => {
      c.removeEventListener("mouseenter", onMouseEnter);
      c.removeEventListener("mouseleave", onMouseLeave);
    });
    excludes.forEach(e => {
      e.removeEventListener("mouseenter", onExcludeEnter);
      e.removeEventListener("mouseleave", onExcludeLeave);
    });
    bubble.remove();
    style.remove();
  };
}
