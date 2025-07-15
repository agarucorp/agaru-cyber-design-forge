import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const CyberHero = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-orb-1" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-orb-2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-orb-3" />
        
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
          <div className="absolute top-32 right-40 w-2 h-2 bg-cyber-accent rounded-full animate-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-60 w-1 h-1 bg-cyber-primary rounded-full animate-glow" style={{ animationDelay: '3s' }} />
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-cyber-secondary rounded-full animate-glow" style={{ animationDelay: '1.5s' }} />

          {/* Rotating Elements */}
          <svg className="absolute bottom-20 right-40 animate-spin-slow" width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="25" fill="none" stroke="hsl(var(--cyber-accent))" strokeWidth="1" opacity="0.3" strokeDasharray="10,5" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Next-Gen UX Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Build </span>
                <span className="text-cyber-primary">Cyberpunk</span>
                <br />
                <span className="text-foreground">Interfaces</span>
                <br />
                <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
                  of Tomorrow
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Experience the future of user interfaces with our cutting-edge platform. 
                Create stunning, responsive apps with cyberpunk aesthetics and next-gen functionality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cyber" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cyber-outline" size="lg" className="group">
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Smartphone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[520px] bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-2 shadow-cyber">
                {/* Phone Screen */}
                <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden border border-cyber-primary/20 relative">
                  
                  {/* Screen Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10" />
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-xs text-foreground/70">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-cyber-primary rounded-sm" />
                      <div className="w-4 h-2 bg-cyber-primary/60 rounded-sm" />
                      <div className="w-4 h-2 bg-cyber-primary/30 rounded-sm" />
                    </div>
                  </div>

                  {/* App Interface */}
                  <div className="px-6 space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-2xl mx-auto flex items-center justify-center shadow-neon">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground">CyberApp</h3>
                      <p className="text-xs text-muted-foreground">Next-Gen Platform</p>
                    </div>

                    {/* Feature Cards */}
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg border border-cyber-primary/20 bg-cyber-primary/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-primary/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-primary rounded-full animate-glow" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">Neural Interface</div>
                            <div className="text-xs text-muted-foreground">AI-Powered Design</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-cyber-secondary/20 bg-cyber-secondary/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-secondary/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-secondary rounded-full animate-glow" style={{ animationDelay: '1s' }} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">Quantum Sync</div>
                            <div className="text-xs text-muted-foreground">Real-time Updates</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-cyber-accent/20 bg-cyber-accent/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyber-accent/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-accent rounded-full animate-glow" style={{ animationDelay: '2s' }} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">Holo Display</div>
                            <div className="text-xs text-muted-foreground">3D Visualization</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4">
                      <div className="w-full h-12 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg flex items-center justify-center shadow-neon">
                        <span className="text-white font-medium text-sm">Connect Neural Link</span>
                      </div>
                    </div>
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

export default CyberHero;