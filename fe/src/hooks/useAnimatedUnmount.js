import { useState, useRef, useEffect } from 'react';

export default function useAnimatedUnmount(visible) {
  const [sholdRender, setSholdRender] = useState(visible);

  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setSholdRender(true);
    }

    function handleAnimationEnd() {
      setSholdRender(false);
    }

    const elementRef = animatedElementRef.current;

    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [visible]);

  return {
    sholdRender,
    animatedElementRef,
  };
}
