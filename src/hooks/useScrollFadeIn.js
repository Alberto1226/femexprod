import { useEffect, useRef, useState } from "react";

const useScrollFadeIn = (direction = "up") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible, direction];
};

export default useScrollFadeIn;
