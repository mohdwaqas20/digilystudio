import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    let raf;
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const growOn = () => ringRef.current?.classList.add("cursor-active");
    const growOff = () => ringRef.current?.classList.remove("cursor-active");

    window.addEventListener("mousemove", move);
    document
      .querySelectorAll("a, button, .frame, [data-cursor-grow]")
      .forEach((el) => {
        el.addEventListener("mouseenter", growOn);
        el.addEventListener("mouseleave", growOff);
      });

    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!window.matchMedia("(pointer: fine)").matches) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cr-tl" />
        <span className="cr-tr" />
        <span className="cr-bl" />
        <span className="cr-br" />
      </div>
    </>
  );
}
