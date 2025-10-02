import LogoNav from '/lovable-uploads/agarumayusmixed.png';

interface LogoFrameProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LogoFrame = ({ size = 'md', className = '' }: LogoFrameProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const logoSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center ${className}`}
      style={{ 
        background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)', 
        boxShadow: '0 0 8px 1px #4DE3FF22' 
      }}
    >
      <img 
        src={LogoNav} 
        alt="Logo AgaruCorp" 
        className={`${logoSizeClasses[size]} object-contain`} 
      />
    </div>
  );
};

export default LogoFrame; 