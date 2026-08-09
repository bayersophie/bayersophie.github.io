import { useEffect, useRef, useState } from "react";

function prefersInstantReveal() {
  if (typeof window === "undefined") return true;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return prefersReducedMotion || typeof IntersectionObserver === "undefined";
}

/**
 * Tracks whether an element has scrolled into view, so it can be
 * animated in via CSS (see the `.reveal` class in index.css).
 *
 * Starts out already "visible" when the user prefers reduced
 * motion or when IntersectionObserver isn't available, so no
 * animation is ever triggered in those cases.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(prefersInstantReveal);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return [ref, isVisible] as const;
}

export default useReveal;
