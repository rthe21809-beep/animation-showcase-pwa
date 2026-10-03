import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const scenes = [
  { title: 'Orb Pulse', category: 'Buttons', subtitle: 'Soft halos and living core motion.', variant: 'orbPulse' },
  { title: 'Ribbon Wave', category: 'Lines', subtitle: 'Ribbon stress flowing through a quiet field.', variant: 'ribbonWave' },
  { title: 'Grid Sweep', category: 'Interface', subtitle: 'Static geometry dissolving into motion.', variant: 'gridSweep' },
  { title: 'Type Drift', category: 'Text', subtitle: 'Letters that breathe with gentle friction.', variant: 'typeDrift' },
  { title: 'Signal Noise', category: 'Audio', subtitle: 'Chaotic fragments aligning into rhythm.', variant: 'signalNoise' },
  { title: 'Orbit Ring', category: 'Buttons', subtitle: 'Circular accents orbiting a central pulse.', variant: 'orbitRing' },
  { title: 'Glass Lattice', category: 'Panels', subtitle: 'Prism cells holding still light.', variant: 'glassLattice' },
  { title: 'Morph Bloom', category: 'Forms', subtitle: 'Soft geometric metamorphosis in grayscale.', variant: 'morphBloom' },
  { title: 'Beam Search', category: 'Light', subtitle: 'Scanning beams tracing a hidden axis.', variant: 'beamSearch' },
  { title: 'Ripple Stack', category: 'Water', subtitle: 'Concentric rings collapsing into cadence.', variant: 'rippleStack' },
  { title: 'Vapor Bands', category: 'Atmosphere', subtitle: 'Slow-moving vapor tracing air currents.', variant: 'vaporBands' },
  { title: 'Hex Field', category: 'Grid', subtitle: 'Hexagons unfolding in measured time.', variant: 'hexField' },
  { title: 'Sine Columns', category: 'Data', subtitle: 'Vertical data lines under slow harmonics.', variant: 'sineColumns' },
  { title: 'Capsule Drift', category: 'Buttons', subtitle: 'Capsules drifting between active states.', variant: 'capsuleDrift' },
  { title: 'Ring Collapse', category: 'Forms', subtitle: 'A ring turning inward with smooth tension.', variant: 'ringCollapse' },
  { title: 'Tunnel Vortex', category: 'Depth', subtitle: 'A collapsing tunnel inside a quiet frame.', variant: 'tunnelVortex' },
  { title: 'Stripe Flow', category: 'Motion', subtitle: 'Parallel strips stretching in sequence.', variant: 'stripeFlow' },
  { title: 'Focus Pulse', category: 'Focus', subtitle: 'Monolithic rings tracking an internal pulse.', variant: 'focusPulse' },
  { title: 'Arc Rain', category: 'Weather', subtitle: 'Arc lines falling into a dim horizon.', variant: 'arcRain' },
  { title: 'Monolith Rise', category: 'Structure', subtitle: 'Solid blocks rising from engineered silence.', variant: 'monolithRise' },
  { title: 'Luma Swarm', category: 'Particles', subtitle: 'Tiny lights circling a slower center.', variant: 'lumaSwarm' },
  { title: 'Split Rows', category: 'Text', subtitle: 'Rows parting and settling into motion.', variant: 'splitRows' },
  { title: 'Magnet Mesh', category: 'Energy', subtitle: 'Nodes aligning across invisible fields.', variant: 'magnetMesh' },
  { title: 'Slicer Sweep', category: 'Cuts', subtitle: 'Slices of volume gliding through space.', variant: 'slicerSweep' },
  { title: 'Static Motes', category: 'Particles', subtitle: 'Dust suspended in a slow mechanical drift.', variant: 'staticMotes' },
  { title: 'Conic Spin', category: 'Shapes', subtitle: 'Cones and rings rotating on a quiet orbit.', variant: 'conicSpin' },
  { title: 'Stagger Bars', category: 'Charts', subtitle: 'Bars landing with patient stagger timing.', variant: 'staggerBars' },
  { title: 'Thread Lace', category: 'Lines', subtitle: 'Fine threads gathering into an elegant knot.', variant: 'threadLace' },
  { title: 'Mirage Bloom', category: 'Atmosphere', subtitle: 'Blurred blooms rising through foggy layers.', variant: 'mirageBloom' },
  { title: 'Depth Blocks', category: 'Panels', subtitle: 'Flat planes shifting in measured 3D rhythm.', variant: 'depthBlocks' },
  { title: 'Night Current', category: 'Flow', subtitle: 'Current lines sliding under a heavy glow.', variant: 'nightCurrent' }
];

function App() {
  const [index, setIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const current = scenes[index];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(stageRef.current, {
      duration: 0.65,
      autoAlpha: 1,
      filter: 'blur(0px)',
      ease: 'power3.out'
    });
    return () => tl.kill();
  }, [index]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setIndex((value) => (value + 1) % scenes.length);
      }
      if (event.key === 'ArrowLeft') {
        setIndex((value) => (value - 1 + scenes.length) % scenes.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const goPrev = () => setIndex((value) => (value - 1 + scenes.length) % scenes.length);
  const goNext = () => setIndex((value) => (value + 1) % scenes.length);

  return (
    <div className="app-shell">
      <div ref={stageRef} className="scene-stage">
        <div className="noise-layer" aria-hidden="true" />

        <header className="top-bar">
          <div className="label-group">
            <span className="eyebrow">Monochrome Motion Lab</span>
            <span className="eyebrow soft">{current.category}</span>
          </div>
          <span className="counter">
            {String(index + 1).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')}
          </span>
        </header>

        <div className="hero-copy">
          <p className="kicker">{current.category}</p>
          <h1>{current.title}</h1>
          <p className="description">{current.subtitle}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.variant}
            className="animation-window"
            initial={{ opacity: 0, filter: 'blur(16px)', scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderScene(current.variant)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="nav-shell" aria-label="Animation navigation">
        <button type="button" className="nav-button prev" onClick={goPrev} aria-label="Previous animation">
          <span>←</span>
        </button>
        <button type="button" className="nav-button next" onClick={goNext} aria-label="Next animation">
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

function renderScene(variant: string) {
  switch (variant) {
    case 'orbPulse':
      return (
        <div className="scene orb-pulse">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
          <span className="ring ring-1" />
          <span className="ring ring-2" />
        </div>
      );
    case 'ribbonWave':
      return (
        <div className="scene ribbon-wave">
          <span className="ribbon ribbon-1" />
          <span className="ribbon ribbon-2" />
          <span className="ribbon ribbon-3" />
          <span className="ribbon ribbon-4" />
        </div>
      );
    case 'gridSweep':
      return (
        <div className="scene grid-sweep">
          <div className="grid-lines">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} className="grid-line" style={{ animationDelay: `${index * 0.12}s` }} />
            ))}
          </div>
          <div className="sweep-bar" />
        </div>
      );
    case 'typeDrift':
      return (
        <div className="scene type-drift">
          <div className="text-stack">
            <span>MONO</span>
            <span>CHROME</span>
            <span>MOTION</span>
          </div>
        </div>
      );
    case 'signalNoise':
      return (
        <div className="scene signal-noise">
          {Array.from({ length: 26 }, (_, index) => (
            <span key={index} className="signal-bar" style={{ animationDelay: `${index * 0.08}s` }} />
          ))}
        </div>
      );
    case 'orbitRing':
      return (
        <div className="scene orbit-ring">
          <span className="orbit-core" />
          <span className="orbit-dot dot-1" />
          <span className="orbit-dot dot-2" />
          <span className="orbit-dot dot-3" />
          <span className="orbit-dot dot-4" />
        </div>
      );
    case 'glassLattice':
      return (
        <div className="scene glass-lattice">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="cell" style={{ animationDelay: `${index * 0.1}s` }} />
          ))}
        </div>
      );
    case 'morphBloom':
      return (
        <div className="scene morph-bloom">
          <span className="bloom bloom-1" />
          <span className="bloom bloom-2" />
          <span className="bloom bloom-3" />
        </div>
      );
    case 'beamSearch':
      return (
        <div className="scene beam-search">
          <span className="beam beam-1" />
          <span className="beam beam-2" />
          <span className="beam beam-3" />
          <span className="beam beam-4" />
        </div>
      );
    case 'rippleStack':
      return (
        <div className="scene ripple-stack">
          <span className="ripple ripple-1" />
          <span className="ripple ripple-2" />
          <span className="ripple ripple-3" />
          <span className="ripple ripple-4" />
          <span className="ripple ripple-5" />
        </div>
      );
    case 'vaporBands':
      return (
        <div className="scene vapor-bands">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} className="vapor-band" style={{ animationDelay: `${index * 0.12}s` }} />
          ))}
        </div>
      );
    case 'hexField':
      return (
        <div className="scene hex-field">
          {Array.from({ length: 18 }, (_, index) => (
            <span key={index} className="hex" style={{ animationDelay: `${index * 0.08}s` }} />
          ))}
        </div>
      );
    case 'sineColumns':
      return (
        <div className="scene sine-columns">
          {Array.from({ length: 20 }, (_, index) => (
            <span key={index} className="column" style={{ animationDelay: `${index * 0.07}s` }} />
          ))}
        </div>
      );
    case 'capsuleDrift':
      return (
        <div className="scene capsule-drift">
          {Array.from({ length: 10 }, (_, index) => (
            <span key={index} className="capsule" style={{ animationDelay: `${index * 0.1}s` }} />
          ))}
        </div>
      );
    case 'ringCollapse':
      return (
        <div className="scene ring-collapse">
          <span className="ring-shell shell-1" />
          <span className="ring-shell shell-2" />
          <span className="ring-shell shell-3" />
          <span className="ring-core" />
        </div>
      );
    case 'tunnelVortex':
      return (
        <div className="scene tunnel-vortex">
          {Array.from({ length: 11 }, (_, index) => (
            <span key={index} className="tunnel-ring" style={{ animationDelay: `${index * 0.12}s` }} />
          ))}
        </div>
      );
    case 'stripeFlow':
      return (
        <div className="scene stripe-flow">
          {Array.from({ length: 14 }, (_, index) => (
            <span key={index} className="stripe" style={{ animationDelay: `${index * 0.1}s` }} />
          ))}
        </div>
      );
    case 'focusPulse':
      return (
        <div className="scene focus-pulse">
          <span className="focus-wave wave-1" />
          <span className="focus-wave wave-2" />
          <span className="focus-wave wave-3" />
          <span className="focus-wave wave-4" />
          <span className="focus-center" />
        </div>
      );
    case 'arcRain':
      return (
        <div className="scene arc-rain">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="arc" style={{ animationDelay: `${index * 0.09}s` }} />
          ))}
        </div>
      );
    case 'monolithRise':
      return (
        <div className="scene monolith-rise">
          {Array.from({ length: 7 }, (_, index) => (
            <span key={index} className="block" style={{ animationDelay: `${index * 0.15}s` }} />
          ))}
        </div>
      );
    case 'lumaSwarm':
      return (
        <div className="scene luma-swarm">
          {Array.from({ length: 24 }, (_, index) => (
            <span key={index} className="swarm-dot" style={{ animationDelay: `${index * 0.07}s` }} />
          ))}
        </div>
      );
    case 'splitRows':
      return (
        <div className="scene split-rows">
          {Array.from({ length: 7 }, (_, index) => (
            <span key={index} className="row-line" style={{ animationDelay: `${index * 0.09}s` }} />
          ))}
        </div>
      );
    case 'magnetMesh':
      return (
        <div className="scene magnet-mesh">
          {Array.from({ length: 20 }, (_, index) => (
            <span key={index} className="node" style={{ animationDelay: `${index * 0.09}s` }} />
          ))}
          <span className="mesh-ring" />
        </div>
      );
    case 'slicerSweep':
      return (
        <div className="scene slicer-sweep">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} className="slice" style={{ animationDelay: `${index * 0.08}s` }} />
          ))}
        </div>
      );
    case 'staticMotes':
      return (
        <div className="scene static-motes">
          {Array.from({ length: 30 }, (_, index) => (
            <span key={index} className="mote" style={{ animationDelay: `${index * 0.05}s` }} />
          ))}
        </div>
      );
    case 'conicSpin':
      return (
        <div className="scene conic-spin">
          <span className="cone cone-1" />
          <span className="cone cone-2" />
          <span className="cone cone-3" />
          <span className="cone-ring" />
        </div>
      );
    case 'staggerBars':
      return (
        <div className="scene stagger-bars">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} className="bar" style={{ animationDelay: `${index * 0.08}s` }} />
          ))}
        </div>
      );
    case 'threadLace':
      return (
        <div className="scene thread-lace">
          <span className="lace lace-1" />
          <span className="lace lace-2" />
          <span className="lace lace-3" />
          <span className="lace lace-4" />
        </div>
      );
    case 'mirageBloom':
      return (
        <div className="scene mirage-bloom">
          <span className="mirage mirage-1" />
          <span className="mirage mirage-2" />
          <span className="mirage mirage-3" />
        </div>
      );
    case 'depthBlocks':
      return (
        <div className="scene depth-blocks">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} className="depth-box" style={{ animationDelay: `${index * 0.1}s` }} />
          ))}
        </div>
      );
    case 'nightCurrent':
      return (
        <div className="scene night-current">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="current-line" style={{ animationDelay: `${index * 0.11}s` }} />
          ))}
        </div>
      );
    default:
      return <div className="scene fallback-scene" />;
  }
}

export default App;
