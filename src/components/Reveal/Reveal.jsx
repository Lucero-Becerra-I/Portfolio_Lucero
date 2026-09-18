import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`reveal ${visible ? "reveal-visible" : ""}`} ref={ref}>
      {children}
    </div>
  );
}

export default Reveal;