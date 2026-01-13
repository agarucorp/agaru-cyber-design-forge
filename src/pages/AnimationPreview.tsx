import React, { useEffect, useRef } from 'react';

const AnimationPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const configRef = useRef({
    color: '#895AF6',
    count: 0, // Se inicializará después
    connectionDist: 0, // Se inicializará después
    nodeSpeed: 0.4
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    // Configuración de la escala de violetas y densidad
    configRef.current = {
      color: '#895AF6',
      count: isMobile ? 40 : 100, // Menos en mobile para fluidez
      connectionDist: isMobile ? 80 : 150, // Distancia de interacción
      nodeSpeed: 0.4 // Velocidad lenta y elegante
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Velocidad vectorial aleatoria
        this.vx = (Math.random() - 0.5) * configRef.current.nodeSpeed;
        this.vy = (Math.random() - 0.5) * configRef.current.nodeSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebote suave en los bordes
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = configRef.current.color;
        ctx.fill();
        // Brillo del nodo
        ctx.shadowBlur = 10;
        ctx.shadowColor = configRef.current.color;
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recrear partículas después del resize
      createParticles();
    }

    function createParticles() {
      particlesRef.current = [];
      for (let i = 0; i < configRef.current.count; i++) {
        particlesRef.current.push(new Particle());
      }
    }

    // Al mover el mouse, los nodos huyen suavemente o se conectan
    function mouseInteraction() {
      if (!mouseRef.current.x || !mouseRef.current.y) return;
      particlesRef.current.forEach(p => {
        const dx = p.x - mouseRef.current.x!;
        const dy = p.y - mouseRef.current.y!;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += dx * 0.01;
          p.y += dy * 0.01;
        }
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Interacción con el mouse
      mouseInteraction();

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p1 = particlesRef.current[i];
        p1.update();
        p1.draw();

        // Lógica de interacción (Nodos cercanos)
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < configRef.current.connectionDist) {
            // La opacidad depende de la cercanía
            const opacity = 1 - (dist / configRef.current.connectionDist);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(137, 90, 246, ${opacity * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Usamos requestAnimationFrame para sincronización perfecta de frames
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    // Inicializar
    resize();
    createParticles();
    animate();

    // Interactividad sutil con el Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      resize();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      backgroundColor: '#000000', 
      overflow: 'hidden', 
      height: '100vh', 
      width: '100vw' 
    }}>
      {/* Hero Container */}
      <div 
        className="hero-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Canvas para el motor gráfico */}
        <canvas 
          ref={canvasRef}
          id="fluid-canvas"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        
        {/* Overlay para profundidad */}
        <div 
          className="vignette"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, transparent 20%, #000000 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Instrucciones flotantes */}
      <div className="absolute top-4 left-4 z-20 bg-black/80 border border-white/20 rounded-lg p-4 max-w-md">
        <h2 className="text-white font-onest font-bold mb-2">Vista de Previsualización</h2>
        <p className="text-white/70 font-manrope text-sm mb-2">
          Esta es una vista temporal para previsualizar tu animación de partículas fluidas.
          Mueve el mouse para ver cómo las partículas reaccionan. Las partículas se conectan cuando están cerca.
        </p>
        <a 
          href="/" 
          className="text-[#895AF6] hover:text-[#895AF6]/80 text-sm mt-2 inline-block"
        >
          ← Volver al sitio
        </a>
      </div>
    </div>
  );
};

export default AnimationPreview;
