"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import logo from "../public/assets/images/BP_logo.png";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

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
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 px-4">
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
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-12 md:space-y-0 md:space-x-12 z-10">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={logo}
            width={250}
            height={250}
            alt="BiddersPro Logo"
            className="w-48 md:w-64 lg:w-72"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Launching Soon...
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4">
            We are launching soon. Stay tuned!
          </p>
        </div>
        {/* Social Media Links */}
        <div className="flex flex-row md:flex-col justify-center gap-8 md:gap-12 mt-8 md:mt-0">
          <a
            href="https://www.facebook.com/people/Bidders-Pro/61552679236200/"
            className="text-3xl md:text-4xl text-white hover:text-blue-500 transition"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/83505748/admin/dashboard/"
            className="text-3xl md:text-4xl text-white hover:text-blue-500 transition"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/bidderspro/"
            className="text-3xl md:text-4xl text-white hover:text-pink-500 transition"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
