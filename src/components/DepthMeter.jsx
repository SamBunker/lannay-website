import { useState, useEffect } from 'react';
import '../styles/DepthMeter.css';

function DepthMeter() {
  const [depth, setDepth] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setPercent(scrollPercent);
      setDepth(Math.round((scrollPercent / 100) * 4000));
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="depth-meter">
      <span className="depth-meter__label">Depth</span>
      <div className="depth-meter__track">
        <div className="depth-meter__fill" style={{ height: `${percent}%` }}></div>
      </div>
      <span className="depth-meter__value">{depth}m</span>
    </div>
  );
}

export default DepthMeter;
