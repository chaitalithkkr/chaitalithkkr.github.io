// Simple intersection observer to reveal sections/cards on scroll
document.addEventListener('DOMContentLoaded', function () {
  const revealTargets = document.querySelectorAll('section, .card, .project, .experience-item');
  const options = { threshold: 0.12 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // optional: unobserve after reveal for perf
        observer.unobserve(entry.target);
      }
    });
  }, options);

  revealTargets.forEach(t => observer.observe(t));
});
