
import { Code, Palette, Target, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'UX/UI Design',
      description: 'Crafting intuitive and visually stunning user experiences that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building fast, responsive, and scalable websites using modern technologies and best practices.',
      features: ['React/Next.js', 'Mobile Responsive', 'SEO Optimized', 'Performance Focused']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Branding',
      description: 'Creating cohesive brand identities that resonate with your target audience and stand out.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Marketing Strategy',
      description: 'Developing data-driven marketing strategies that drive growth and maximize ROI.',
      features: ['Market Research', 'Campaign Planning', 'Content Strategy', 'Performance Analytics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="cyber-text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in helping startups and small businesses establish their digital presence 
            with cutting-edge design and strategic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="cyber-card p-8 rounded-xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-agaru-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 cyber-gradient rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 cyber-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-agaru-purple/30 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
