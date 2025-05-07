'use client'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import 'locomotive-scroll/dist/locomotive-scroll.css';

let LocomotiveScroll;

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Dynamically import LocomotiveScroll to avoid server-side issues
    import('locomotive-scroll').then((module) => {
      LocomotiveScroll = module.default;

      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.08,
      });

      // Clean up
      return () => {
        if (scroll) scroll.destroy();
      };
    });
  }, [hasMounted]);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
