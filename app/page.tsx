"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
export default function ComingSoon() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particlesArray: Particle[] = [];
    const numParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(
        x: number,
        y: number,
        size: number,
        speedX: number,
        speedY: number
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function createParticles() {
      particlesArray = [];
      if (!canvas) return;
      for (let i = 0; i < numParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    function animate() {
      if (canvas) {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particlesArray.forEach((particle) => {
            particle.update();
            particle.draw();
          });
        }
      }
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <Head>
        <title>BiddersPro - Coming Soon</title>
        <meta
          name="description"
          content="BiddersPro is launching soon. Stay tuned!"
        />
      </Head>

      {/* Aurora Background Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Content */}
      <div className="flex  items-center space-x-64 z-10">
        <div className="z-10">
          <Image
            src="/assets/images/BP_logo.png"
            width={300}
            height={300}
            alt="BiddersPro Logo"
          />
        </div>

        <div className="text-7xl md:text-6xl font-bold mb-6  text-white">
          <h1>Launching Soon</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            We are launching soon. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
