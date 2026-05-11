export function reveal(node, options = {}) {
  const delay = options.delay ?? 0;
  const distance = options.distance ?? 18;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.animate(
          [
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          {
            duration: 650,
            delay,
            easing: 'cubic-bezier(.2,.8,.2,1)',
            fill: 'both'
          }
        );
        observer.disconnect();
      }
    },
    { threshold: 0.18 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
