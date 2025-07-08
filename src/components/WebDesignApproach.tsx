
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const WebDesignApproach = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Discovery & Research',
      description: 'We dive deep into understanding your business, target audience, and goals to create a strategic foundation.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Design & Prototype',
      description: 'Creating wireframes and interactive prototypes that visualize the user experience before development.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Building your website with clean, scalable code using modern technologies and best practices.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch & Optimize',
      description: 'Deploying your website and continuously optimizing for performance, SEO, and user experience.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-cyber-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web Design <span className="cyber-text-gradient">Approach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven process ensures every website we create is not only beautiful 
            but also functional, fast, and optimized for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-agaru-purple to-transparent z-0"></div>
              )}
              
              <div className="cyber-card p-8 rounded-xl relative z-10 flex flex-col h-full min-h-[370px]">
                <div className="flex items-center justify-center w-16 h-16 cyber-gradient rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <div className="text-center flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-semibold text-agaru-purple mb-2">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Mobile-First Design',
            'Performance Optimized',
            'SEO Ready',
            'Accessibility Compliant',
            'Modern Technologies',
            'Ongoing Support'
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 glass-effect p-4 rounded-lg animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CheckCircle className="w-5 h-5 text-agaru-purple flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignApproach;
