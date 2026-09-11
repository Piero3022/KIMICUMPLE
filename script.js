(() => {
  const progress = document.querySelector('.progress span');
  const reveals = document.querySelectorAll('.reveal');
  const photoFrame = document.querySelector('.photo-frame');
  const immersive = document.querySelector('.immersive');
  const immersiveImage = document.querySelector('.immersive-sticky img');

  const setProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 5, 4) * 70}ms`;
    observer.observe(el);
  });

  const photoObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) photoFrame.classList.add('is-visible');
  }, { threshold: .2 });
  if (photoFrame) photoObserver.observe(photoFrame);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const updateImmersive = () => {
    if (!immersive || !immersiveImage || reduced) return;
    const rect = immersive.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -rect.top / (immersive.offsetHeight - window.innerHeight)));
    immersiveImage.style.transform = `scale(${1.08 - progress * .075}) translate3d(0, ${progress * -1.8}%, 0)`;
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        setProgress();
        updateImmersive();
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateImmersive, { passive: true });
  setProgress();
  updateImmersive();
})();
