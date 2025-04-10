import { useEffect, useRef } from 'react';
import styles from './HeroBackground.module.css';
import { gsap, Circ } from "gsap";


   


const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    type Point = {
        x: number;
        y: number;
        originX: number;
        originY: number;
        closest: Point[];
        circle: Circle | null;
        active: number;
      };

      class Circle {
        pos: Point;
        radius: number;
        color: string;
        active: number = 0;
      
        constructor(pos: Point, radius: number, color: string) {
          this.pos = pos;
          this.radius = radius;
          this.color = color;
        }
      
        draw(ctx: CanvasRenderingContext2D) {
          if (!this.active) return;
          ctx.beginPath();
          ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = `rgba(156,217,249,${this.active})`;
          ctx.fill();
        }
      }
      
      
    let width = window.innerWidth;
    let height = window.innerHeight;
    let target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    const largeHeader = headerRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let points: Point[] = [];


    canvas.width = width;
    canvas.height = height;
    largeHeader.style.height = `${height}px`;

    // Create points
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * width / 20;
        const py = y + Math.random() * height / 20;
        const p = { x: px, originX: px, y: py, originY: py, closest: [], circle: null, active: 0 };
        points.push(p);
      }
    }

    // Get closest points
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const closest: any[] = [];

      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 === p2) continue;
        if (closest.length < 5) {
          closest.push(p2);
        } else {
          for (let k = 0; k < 5; k++) {
            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              break;
            }
          }
        }
      }

      p1.closest = closest;
    }

    // Add circles
    for (let i in points) {
      const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      points[i].circle = c;
    }

    // Events
    const mouseMove = (e: MouseEvent) => {
      target.x = e.pageX;
      target.y = e.pageY;
    };

    const scrollCheck = () => {
      animateHeader = window.scrollY <= height;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    initAnimation();

    function initAnimation() {
      animate();
      for (let p of points) shiftPoint(p);
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
    
        for (let p of points) {
          const d = getDistance(target, p);
          p.active = d < 4000 ? 0.3 : d < 20000 ? 0.1 : d < 40000 ? 0.02 : 0;
          if (p.circle) {
            p.circle.active = p.active * 2;
          }
          drawLines(p);
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p: Point) {
        gsap.to(p, 1 + 1 * Math.random(), {
          x: p.originX - 50 + Math.random() * 100,
          y: p.originY - 50 + Math.random() * 100,
          ease: Circ.easeInOut,
          onComplete: () => shiftPoint(p),
        });
      }
      
      function drawLines(p: Point) {
        if (!p.active || !p.closest) return;
        for (let i in p.closest) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.closest[i].x, p.closest[i].y);
          ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
          ctx.stroke();
        }
      }
      

      function getDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      }
      
      

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={headerRef} className={styles.largeHeader}>
      <canvas ref={canvasRef} />
      <h1 className={styles.mainTitle}>
        Connect <span className={styles.thin}>Three</span>
      </h1>
    </div>
  );
};

export default HeroBackground;
