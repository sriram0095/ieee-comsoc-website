"use client";

import { useEffect, useRef } from "react";

export default function AsteroidCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Reduced history points for a shorter tail duration
    const points = [];
    const maxPoints = 12; 

    const mouse = { x: -100, y: -100 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Add current mouse coordinate to the trail array
      if (mouse.x > 0 && mouse.y > 0) {
        points.unshift({ x: mouse.x, y: mouse.y });
      }

      // Rapid decay: Trim points to keep the tail short
      if (points.length > maxPoints) {
        points.pop();
      }

      if (points.length > 2) {
        // 1. Subtle Outer Glow Line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#38bdf8";
        ctx.stroke();

        // 2. Ultra-Thin White Inner Core (Ultra crisp)
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 0.6; // Extra thin streak
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowBlur = 2;
        ctx.shadowColor = "#ffffff";
        ctx.stroke();

        // 3. Compact Lead Spark
        ctx.beginPath();
        ctx.arc(points[0].x, points[0].y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
    />
  );
}