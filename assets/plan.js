// Freezes the floor-plan animation for visitors who prefer reduced motion,
// and pauses it while the plan is off screen.
(function () {
  var svg = document.getElementById("floorplan");
  if (!svg || typeof svg.pauseAnimations !== "function") return;
  var mq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function freeze() { svg.setCurrentTime(9); svg.pauseAnimations(); }
  if (mq && mq.matches) { freeze(); return; }
  if (mq && mq.addEventListener) mq.addEventListener("change", function (e) { if (e.matches) freeze(); else svg.unpauseAnimations(); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (mq && mq.matches) return;
        if (e.isIntersecting) svg.unpauseAnimations(); else svg.pauseAnimations();
      });
    }).observe(svg);
  }
})();
