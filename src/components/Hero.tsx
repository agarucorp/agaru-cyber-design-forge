
import { Zap } from "lucide-react";
import { useEffect, useRef } from "react";
// Mockup guardado para uso futuro - ver código comentado más abajo
// import LogoNav from './assets/Navbar/LogoNav.svg';

// Utilidad para detectar desktop
// Función mejorada para scroll suave a secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Hero = ({ lang = 'ES' }) => {
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
      nodeSpeed: 0.7 // Velocidad aumentada ligeramente
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
    <div className="min-h-screen bg-background relative overflow-hidden pt-2 w-full">
      {/* Canvas Background - Animación de Partículas Fluidas */}
      <canvas 
        ref={canvasRef}
        id="fluid-canvas"
        className="absolute inset-0 w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: '#080808'
        }}
      />
      
      {/* Overlay para profundidad */}
      <div 
        className="vignette absolute inset-0"
        style={{
          background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 mt-8 lg:mt-0 lg:pt-32 lg:pb-16">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Content */}
          <div className="space-y-8 lg:space-y-6 max-w-2xl">
            <div className="space-y-4">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#895AF6]/30 bg-[#895AF6]/10 text-[#895AF6] text-sm font-medium animate-fade-in"
              >
                <Zap className="w-4 h-4" />
                Next-Gen UI Platform
              </div>
              
              <h1 
                className="font-onest font-bold leading-tight tracking-tighter animate-fade-in"
                style={{ fontSize: 'clamp(calc(2.25rem - 5px), 5vw, calc(3.75rem - 5px))', wordSpacing: '-0.05em', animationDelay: '0.1s' }}
              >
                {lang === 'ES' ? (
                  <>
                    <span className="sr-only">AgaruCorp - </span><span className="text-[#895AF6]">Productos</span><span className="text-[#895AF6] lowercase"> web de alta fidelidad</span> <span className="text-[#F1F9F4] lowercase">para marcas con visión</span>
                  </>
                ) : (
                  <>
                    <span className="sr-only">AgaruCorp - </span><span>Build</span> <span className="text-[#895AF6] lowercase">digital interfaces</span><br /><span className="lowercase">of</span> <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent lowercase">tomorrow</span>
                  </>
                )}
              </h1>
              
              <p 
                className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed font-manrope font-light animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                {lang === 'ES'
                  ? 'Diseño de sitios web, aplicaciones y branding.'
                  : 'We develop high-impact websites and brand strategies that eliminate friction, optimize costs, and drive growth.'}
              </p>
            </div>
          </div>

          {/* Right Side - Smartphone Mockup - OCULTO (guardado para uso futuro) */}
          {/* 
          <div className="hidden flex justify-center lg:justify-end lg:pr-[1.25%]">
            <div className="relative">
              <div className="relative w-64 h-[480px] bg-black rounded-[2.5rem] p-2" style={{ boxShadow: '0 0 24px 0 #895AF633' }}>
                <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden border border-black relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10" />
                  <div className="flex justify-between items-center px-6 py-4 text-xs text-foreground/70">
                  </div>
                  <div className="px-6 space-y-6 flex flex-col justify-center h-full -mt-3">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)', boxShadow: '0 0 8px 1px #4DE3FF22' }}>
                        <img src={LogoNav} alt="Logo AgaruCorp" className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="font-altroned text-foreground" style={{ fontFamily: "'Altroned Trial', sans-serif", fontSize: '0.94rem' }}>AgaruCorp</h3>
                      <p className="text-xs text-muted-foreground">{lang === 'ES' ? 'Agencia Digital' : 'Digital Agency'}</p>
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                      <div className="p-4 w-[218px] rounded-lg border border-cyber-primary/20 bg-cyber-primary/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-primary/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-primary rounded-full animate-glow" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-foreground">{lang === 'ES' ? 'Desarrollo Full-Stack' : 'Full-Stack Development'}</div>
                            <div className="text-xs text-muted-foreground">Node.js, React, DBs</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 w-[218px] rounded-lg border border-cyber-secondary/20 bg-cyber-secondary/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-secondary/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-secondary rounded-full animate-glow" style={{ animationDelay: '1s' }} />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-foreground">{lang === 'ES' ? 'Diseño Responsive' : 'Responsive Design'}</div>
                            <div className="text-xs text-muted-foreground">{lang === 'ES' ? 'UX/UI Multidispositivo' : 'Multi-Device UX/UI'}</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 w-[218px] rounded-lg border border-cyber-accent/20 bg-cyber-accent/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-accent/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-accent rounded-full animate-glow" style={{ animationDelay: '2s' }} />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-foreground">Branding</div>
                            <div className="text-xs text-muted-foreground">Marketing Roadmap</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-8 -left-4 w-6 h-6 bg-cyber-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyber-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
