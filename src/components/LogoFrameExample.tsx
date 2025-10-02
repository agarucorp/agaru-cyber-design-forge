import LogoFrame from './LogoFrame';
import './LogoFrame.css';

const LogoFrameExample = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-900">
      <h2 className="text-2xl font-bold text-white mb-6">Logo Frame Component Examples</h2>
      
      {/* React Component Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">React Component Usage:</h3>
        <div className="flex items-center gap-4">
          <LogoFrame size="sm" />
          <LogoFrame size="md" />
          <LogoFrame size="lg" />
        </div>
      </div>

      {/* CSS Only Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">CSS Only Usage:</h3>
        <div className="flex items-center gap-4">
          <div className="logo-frame logo-frame-sm">
            <img src="/lovable-uploads/agarumayusmixed.png" alt="Logo AgaruCorp" />
          </div>
          <div className="logo-frame logo-frame-md">
            <img src="/lovable-uploads/agarumayusmixed.png" alt="Logo AgaruCorp" />
          </div>
          <div className="logo-frame logo-frame-lg">
            <img src="/lovable-uploads/agarumayusmixed.png" alt="Logo AgaruCorp" />
          </div>
          <div className="logo-frame logo-frame-xl">
            <img src="/lovable-uploads/agarumayusmixed.png" alt="Logo AgaruCorp" />
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Code Examples:</h3>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">React Component:</h4>
          <pre className="text-sm text-gray-300">
{`import LogoFrame from './LogoFrame';

// Usage
<LogoFrame size="md" />
<LogoFrame size="lg" className="mx-auto" />`}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">CSS Only:</h4>
          <pre className="text-sm text-gray-300">
{`<div className="logo-frame logo-frame-md">
  <img src="/lovable-uploads/agarumayusmixed.png" alt="Logo AgaruCorp" />
</div>`}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">CSS Classes Available:</h4>
          <pre className="text-sm text-gray-300">
{`Size Classes:
- logo-frame-sm (48x48px)
- logo-frame-md (64x64px) 
- logo-frame-lg (80x80px)
- logo-frame-xl (96x96px)

Base Class:
- logo-frame (includes gradient and shadow)`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LogoFrameExample; 