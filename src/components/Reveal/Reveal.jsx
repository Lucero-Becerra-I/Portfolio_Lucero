import { cloneElement, useEffect, useRef } from "react";

function Reveal({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} reveal`,
  });
}

export default Reveal;
