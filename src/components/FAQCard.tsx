import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

interface FAQCardProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  image?: string; // Nueva prop opcional para imagen
}

const FAQCard = ({ question, answer, isOpen, onToggle, image }: FAQCardProps) => {
  return (
    <div className="cyber-card rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between transition-all duration-300 group hover:shadow-2xl hover:scale-[1.025] hover:bg-[#23243a]/90 hover:text-[#895AF6] focus:outline-none"
      >
        <div className="flex items-center gap-4 flex-1">
          {image && (
            <div className="flex-shrink-0">
              <img 
                src={image} 
                alt={question}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
          )}
          <span className="text-[16px] md:text-xl font-onest font-light text-white pr-8 transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6] capitalize">
            {question}
          </span>
        </div>
        <div className="text-white flex-shrink-0 transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6]">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 animate-fade-in">
          <div className="h-px bg-gradient-to-r from-agaru-purple to-transparent mb-4"></div>
          <div className="pr-2 font-manrope font-light">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQCard; 