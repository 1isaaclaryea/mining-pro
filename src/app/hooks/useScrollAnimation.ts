import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true, delay = 0 } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClass = inView
    ? `animate-fade-in-up`
    : 'opacity-0 translate-y-8';

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return { ref, inView, animationClass, style };
}
