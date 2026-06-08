import { useMemo } from 'react';
import '../styles/BioBeach.css';
import palePinkCoral from '../assets/images/pale-pink-coral.png';
import redColoredCoral from '../assets/images/red-colored-coral.png';
import redCoral from '../assets/images/red-coral.png';
import yellowFish from '../assets/images/scandi-animal-yellow-fish.png';
import smallGreenFish from '../assets/images/small-green-fish.png';

function BioBeach() {
  const glowSpots = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: `${3 + Math.random() * 8}px`,
      opacity: 0.3 + Math.random() * 0.5,
    })),
  []);

  return (
    <section className="bio-beach">
      {/* Shore / sand line */}
      <div className="bio-beach__shore"></div>

      {/* Bioluminescent water */}
      <div className="bio-beach__water">
        {/* Glowing wave lines */}
        <svg className="bio-beach__wave-line bio-beach__wave-line--1" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30" stroke="rgba(0,255,204,0.2)" strokeWidth="1.5" fill="none" />
        </svg>
        <svg className="bio-beach__wave-line bio-beach__wave-line--2" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,35 C360,55 720,15 1080,35 C1260,45 1380,25 1440,35" stroke="rgba(0,180,255,0.15)" strokeWidth="1" fill="none" />
        </svg>

        {/* Bioluminescent glow spots */}
        {glowSpots.map(spot => (
          <div
            key={spot.id}
            className="bio-beach__glow"
            style={{
              '--x': spot.x,
              '--delay': spot.delay,
              '--duration': spot.duration,
              '--size': spot.size,
              '--glow-opacity': spot.opacity,
            }}
          />
        ))}
      </div>

      {/* Foam line where waves meet shore */}
      <div className="bio-beach__foam"></div>

      {/* Coral edge — left */}
      <div className="coral-edge coral-edge--left coral-edge--shallow">
        <img className="coral-edge__img coral-edge__img--lg" src={palePinkCoral} alt="" />
        <img className="coral-edge__img coral-edge__img--sm" src={redColoredCoral} alt="" />
      </div>

      {/* Coral edge — right */}
      <div className="coral-edge coral-edge--right coral-edge--shallow">
        <img className="coral-edge__img coral-edge__img--lg" src={redCoral} alt="" />
        <img className="coral-edge__img coral-edge__img--sm" src={palePinkCoral} alt="" />
      </div>

      {/* Fish swimming right */}
      <div className="bio-beach__fish bio-beach__fish--1">
        <img src={yellowFish} alt="" />
      </div>
      {/* Fish swimming left */}
      <div className="bio-beach__fish bio-beach__fish--2">
        <img src={smallGreenFish} alt="" />
      </div>
    </section>
  );
}

export default BioBeach;
