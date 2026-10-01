import { useEffect, useRef, useState } from 'react';

// Attaches a ref that reveals its element once it scrolls into view.
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('visible');
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Tracks which section is currently under the header, for nav highlighting.
export function useScrollSpy(ids, offset = 88) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join(','), offset]);
  return active;
}

// On load, honour a #hash or ?section= deep link by scrolling to that section
// once layout has settled (images can shift it).
export function useDeepLinkScroll() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get('section') || window.location.hash.replace('#', '');
    if (!target) return;
    const el = document.getElementById(target);
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}
