
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Web Design & Development',
      questions: [
        {
          question: 'What is your typical timeline for a web design project?',
          answer: 'Our typical timeline ranges from 4-8 weeks depending on the complexity and scope. We start with a discovery phase (1 week), followed by design (2-3 weeks), development (2-3 weeks), and testing/launch (1 week). We provide detailed timelines during our initial consultation.'
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support. Our support plans are tailored to your specific needs and budget.'
        },
        {
          question: 'Will my website be mobile-responsive?',
          answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring optimal performance and user experience across all devices and screen sizes. We test thoroughly on various devices before launch.'
        }
      ]
    },
    {
      category: 'Branding & Strategy',
      questions: [
        {
          question: 'What does your branding process include?',
          answer: 'Our comprehensive branding process includes brand foundation research, competitive analysis, logo design, color palette, typography, brand guidelines, and marketing collateral. We ensure your brand identity is cohesive across all touchpoints.'
        },
        {
          question: 'How do you approach marketing strategy development?',
          answer: 'We start with thorough market research and competitor analysis, define your target audience, develop your unique value proposition, create content strategies, and provide actionable roadmaps for implementation. Everything is data-driven and measurable.'
        },
        {
          question: 'Can you help with rebranding an existing business?',
          answer: 'Yes, we specialize in both new brand creation and rebranding. We carefully analyze your current brand position, identify opportunities for improvement, and create a strategic transition plan that maintains brand equity while refreshing your image.'
        }
      ]
    },
    {
      category: 'Project Management',
      questions: [
        {
          question: 'How do we communicate during the project?',
          answer: 'We maintain regular communication through weekly check-ins, project management tools, and are always available via email or phone. You\'ll have a dedicated project manager as your single point of contact throughout the process.'
        },
        {
          question: 'What do you need from us to get started?',
          answer: 'We need information about your business goals, target audience, preferred style/examples, content (text, images), and any specific requirements. We provide a detailed questionnaire during onboarding to gather all necessary information.'
        },
        {
          question: 'What are your payment terms?',
          answer: 'We typically work with a 50% deposit to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods and provide detailed contracts for all work.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cyber-grey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="cyber-text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-1 h-8 cyber-gradient rounded-full mr-4"></div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div key={questionIndex} className="cyber-card rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                      >
                        <span className="text-lg font-semibold text-white pr-8">
                          {faq.question}
                        </span>
                        <div className="text-agaru-purple flex-shrink-0">
                          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <div className="h-px bg-gradient-to-r from-agaru-purple to-transparent mb-4"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              We're here to help! Reach out to us and we'll get back to you within 24 hours.
            </p>
            <a
              href="#contact"
              className="cyber-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-agaru-purple/30 transition-all duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
