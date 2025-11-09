import { getLenis } from "../lib/lenis";

export function scrollTo(target, opts = {}) {
  const lenis = getLenis();
  if (!lenis) return;

  // You can pass an element, selector, number (px), or 'top'/'bottom'
  lenis.scrollTo(target, {
    // These override the provider defaults only for this call:
    duration: 1.0, // keep this equal to your global “feel” for consistency
    offset: 0, // e.g., sticky header height
    easing: (x) => 1 - Math.pow(1 - x, 3), // custom ease if you like
    lock: false, // lock input during animated scroll
    ...opts,
  });
}
