"use client";

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outerCirclePosition, setOuterCirclePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      setIsHoveringLink(true);
    };

    const handleMouseLeave = () => {
      setIsHoveringLink(false);
    };

    document.addEventListener('mousemove', handleMouseMove);

    const links = document.querySelectorAll('a, button, input[type="submit"], [role="button"], .cursor-pointer');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    let animationFrameId: number;
    const animateOuterCircle = () => {
      setOuterCirclePosition(prev => ({
        x: prev.x + (mousePositionRef.current.x - prev.x) * 0.15,
        y: prev.y + (mousePositionRef.current.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateOuterCircle);
    };

    animationFrameId = requestAnimationFrame(animateOuterCircle);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-[9999] pointer-events-none rounded-full bg-[#ff1493] transition-transform duration-200 ease-out
          ${isHoveringLink ? 'scale-150 opacity-70' : 'scale-100 opacity-50'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
          width: isHoveringLink ? '40px' : '20px',
          height: isHoveringLink ? '40px' : '20px',
          boxShadow: '0 0 15px #ff1493',
        }}
      />
      <div
        className={`fixed z-[9999] pointer-events-none rounded-full border-2 border-[#ff1493] ease-out
          ${isHoveringLink ? 'scale-150 opacity-50' : 'scale-100 opacity-20'}`}
        style={{
          left: outerCirclePosition.x,
          top: outerCirclePosition.y,
          transform: `translate(-50%, -50%)`,
          width: '60px',
          height: '60px',
        }}
      />
    </>
  );
};

export default CustomCursor;
