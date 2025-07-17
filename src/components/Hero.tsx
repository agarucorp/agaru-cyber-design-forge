
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import LogoNav from './assets/Navbar/LogoNav.svg';

// Utilidad para detectar desktop
const isDesktop = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

const Hero = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-2">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(ellipse 400px 300px at 0% 0%, rgba(137,90,246,0.10) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-orb-2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ background: 'radial-gradient(ellipse 300px 200px at 50% 50%, rgba(255,62,201,0.10) 0%, transparent 100%)' }} />
        
        {/* Floating SVG Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Hexagon Grid */}
          <svg className="absolute top-20 left-20 animate-float" width="100" height="100" viewBox="0 0 100 100">
            <polygon 
              points="50,5 85,25 85,75 50,95 15,75 15,25" 
              fill="none" 
              stroke="hsl(var(--cyber-primary))" 
              strokeWidth="1" 
              opacity="0.3"
            />
          </svg>
          
          <svg className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }} width="80" height="80" viewBox="0 0 80 80">
            <polygon 
              points="40,4 68,20 68,60 40,76 12,60 12,20" 
              fill="none" 
              stroke="hsl(var(--cyber-secondary))" 
              strokeWidth="1" 
              opacity="0.4"
            />
          </svg>

          {/* Circuit Lines */}
          <svg className="absolute bottom-32 left-32 animate-glow" width="200" height="2" viewBox="0 0 200 2">
            <line x1="0" y1="1" x2="200" y2="1" stroke="hsl(var(--cyber-primary))" strokeWidth="1" opacity="0.6" />
            <circle cx="50" cy="1" r="3" fill="hsl(var(--cyber-primary))" opacity="0.8" />
            <circle cx="150" cy="1" r="3" fill="hsl(var(--cyber-primary))" opacity="0.8" />
          </svg>

          <svg className="absolute top-60 right-20 animate-glow" style={{ animationDelay: '0.5s' }} width="2" height="150" viewBox="0 0 2 150">
            <line x1="1" y1="0" x2="1" y2="150" stroke="hsl(var(--cyber-secondary))" strokeWidth="1" opacity="0.5" />
            <circle cx="1" cy="40" r="2" fill="hsl(var(--cyber-secondary))" opacity="0.8" />
            <circle cx="1" cy="110" r="2" fill="hsl(var(--cyber-secondary))" opacity="0.8" />
          </svg>

          {/* Geometric Dots */}
          <div className="absolute top-32 right-40 w-2 h-2 bg-[#00FFFF] rounded-full animate-glow" style={{ animationDelay: '2s', opacity: 0.12 }} />
          <div className="absolute bottom-40 left-60 w-1 h-1 bg-[#895AF6] rounded-full animate-glow" style={{ animationDelay: '3s', opacity: 0.12 }} />
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-gradient-to-br from-[#895AF6] to-[#00FFFF] rounded-full animate-glow" style={{ animationDelay: '1.5s', opacity: 0.10 }} />

          {/* Rotating Elements */}
          <svg className="absolute bottom-20 right-40 animate-spin-slow" width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="25" fill="none" stroke="hsl(var(--cyber-accent))" strokeWidth="1" opacity="0.3" strokeDasharray="10,5" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 mt-8 lg:mt-0 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#895AF6]/30 bg-[#895AF6]/10 text-[#895AF6] text-sm font-medium">
                <Zap className="w-4 h-4" />
                Next-Gen UI Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Interfaces <span className="text-[#895AF6]">Digitales</span><br />
                de próxima<br />
                <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">generación</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Desarrollamos sitios web de alto impacto y estrategias de marca que eliminan fricciones, optimizan costos e impulsan el crecimiento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group bg-[#895AF6] text-white border border-[#895AF6] hover:bg-transparent hover:text-[#895AF6] hover:border-[#895AF6] hover:shadow-[0_0_30px_0_#895AF6] shadow-[0_0_20px_0_#895AF6] transition-all duration-300 flex items-center justify-center gap-2 px-5 py-2 rounded-md font-medium text-base text-center sm:justify-start sm:text-left"
                onClick={e => {
                  if (isDesktop()) {
                    e.preventDefault();
                    window.location.hash = 'services';
                  }
                }}
                onAuxClick={e => {
                  if (isDesktop()) e.preventDefault();
                }}
                onContextMenu={e => {
                  if (isDesktop()) e.preventDefault();
                }}
              >
                Empezar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group text-[#895AF6] border-[#895AF6] shadow-[0_0_20px_0_#895AF6] hover:shadow-[0_0_30px_0_#895AF6] hover:bg-transparent hover:text-[#895AF6] transition-all duration-300 flex flex-col items-center justify-center gap-1.5 px-5 py-2 rounded-md font-medium text-base text-center sm:flex-row sm:items-center sm:justify-start sm:text-left"
                onClick={e => {
                  if (isDesktop()) {
                    e.preventDefault();
                    window.location.hash = 'contact';
                  }
                }}
                onAuxClick={e => {
                  if (isDesktop()) e.preventDefault();
                }}
                onContextMenu={e => {
                  if (isDesktop()) e.preventDefault();
                }}
              >
                Contanos de tu Proyecto
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">100+</div>
                <div className="text-sm text-muted-foreground">Proyectos Entregados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-secondary">99%</div>
                <div className="text-sm text-muted-foreground">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00FFFF]">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte</div>
              </div>
            </div>
          </div>

          {/* Right Side - Smartphone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[520px] bg-black rounded-[2.5rem] p-2" style={{ boxShadow: '0 0 24px 0 #895AF633' }}>
                {/* Phone Screen */}
                <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden border border-black relative">
                  
                  {/* Screen Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10" />
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-xs text-foreground/70">
                    {/* Eliminado: símbolos de señal */}
                  </div>

                  {/* App Interface */}
                  <div className="px-6 space-y-6 flex flex-col justify-center h-full -mt-3">
                    {/* Header */}
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)', boxShadow: '0 0 8px 1px #4DE3FF22' }}>
                        <img src={LogoNav} alt="Logo AgaruCorp" className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="font-altroned text-foreground" style={{ fontFamily: "'Altroned Trial', sans-serif", fontSize: '0.94rem' }}>AgaruCorp</h3>
                      <p className="text-xs text-muted-foreground">Agencia Digital</p>
                    </div>

                    {/* Feature Cards */}
                    <div className="space-y-3 flex flex-col items-center">
                      <div className="p-4 w-[218px] rounded-lg border border-cyber-primary/20 bg-cyber-primary/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-primary/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-primary rounded-full animate-glow" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-foreground">Desarrollo Full-Stack</div>
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
                            <div className="text-xs font-medium text-foreground">Diseño Responsive</div>
                            <div className="text-xs text-muted-foreground">UX/UI Multidispositivo</div>
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

                    {/* Bottom Action */}
                    
                  </div>
                </div>

                {/* Phone Notch */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              </div>

              {/* Floating Elements around Phone */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-8 -left-4 w-6 h-6 bg-cyber-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyber-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
