import '../styles/SandFloor.css';
import treasureChest from '../assets/images/icons8-treasure-chest.svg';

function SandFloor() {
  return (
    <div className="sand-floor">
      {/* Water-to-sand wave boundary */}
      <svg className="sand-floor__boundary" viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,10 1440,35 L1440,70 L0,70 Z" fill="currentColor"/>
      </svg>

      {/* Chest sits on top of the boundary wave */}
      <div className="sand-floor__chest">
        <img src={treasureChest} alt="treasure chest on the ocean floor" />
      </div>
    </div>
  );
}

export default SandFloor;
