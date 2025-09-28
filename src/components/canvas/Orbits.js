import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import { renderToString } from 'react-dom/server';

// Helper to position an object on a circle
function getOrbitPosition(radius, angle) {
  return [
    radius * Math.cos(angle),
    radius * Math.sin(angle),
    0
  ];
}

// Custom hook to convert Lucide icon to texture
function useIconTexture(Icon, color) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas with transparent background
    ctx.clearRect(0, 0, 64, 64);
    
    // Create SVG string from the icon with specified color
    const svgString = renderToString(<Icon size={32} color={color} />);
    
    // Create an image from the SVG
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
    
    // Create and return the texture
    const texture = new THREE.CanvasTexture(canvas);
    
    // Draw the icon on the canvas when the image loads
    img.onload = () => {
      ctx.drawImage(img, 16, 16, 32, 32);
      texture.needsUpdate = true;
    };
    
    return texture;
  }, [Icon, color]);

  return texture;
}

function OrbitingElement({ radius, speed, offset, children }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = speed * t + offset;
    const [x, y, z] = getOrbitPosition(radius, angle);
    ref.current.position.set(x, y, z);
  });
  return <group ref={ref}>{children}</group>;
}

export default function Orbits() {
  // Orbit radii
  const radii = [18, 28];
  // Four elements per orbit
  const elements = [0, 1, 2, 3];

  // Define colors for each icon
  const iconColors = {
    cog: '#FF6B6B',      // Coral red for settings/configuration
    chart: '#4ECDC4',    // Turquoise for analytics/data
    headphones: '#45B7D1', // Sky blue for audio/support
    code: '#96CEB4'      // Sage green for development
  };

  // Load all icons as textures with their respective colors
  const cogTexture = useIconTexture(Cog, iconColors.cog);
  const chartTexture = useIconTexture(BarChart3, iconColors.chart);
  const headphonesTexture = useIconTexture(HeadphonesIcon, iconColors.headphones);
  const codeTexture = useIconTexture(Code, iconColors.code);

  // Get viewport width
  const { size, camera } = useThree();
  // Calculate visible width at z=0 (for icon size only)
  const vFOV = (camera.fov * Math.PI) / 180; // vertical fov in radians
  const visibleHeight = 2 * Math.tan(vFOV / 2) * Math.abs(camera.position.z);
  // Center orbits in the middle of the canvas

  // Convert 30px to world units
  const iconSize = (30 / size.height) * visibleHeight;

  // Create all possible icon shapes
  const allShapes = [
    <mesh key="cog">
      <planeGeometry args={[iconSize, iconSize]} />
      <meshBasicMaterial 
        map={cogTexture} 
        transparent 
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>,
    <mesh key="chart">
      <planeGeometry args={[iconSize, iconSize]} />
      <meshBasicMaterial 
        map={chartTexture} 
        transparent 
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>,
    <mesh key="headphones">
      <planeGeometry args={[iconSize, iconSize]} />
      <meshBasicMaterial 
        map={headphonesTexture} 
        transparent 
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>,
    <mesh key="code">
      <planeGeometry args={[iconSize, iconSize]} />
      <meshBasicMaterial 
        map={codeTexture} 
        transparent 
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  ];

  // Draw orbits as circles
  function OrbitCircle({ radius }) {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(...getOrbitPosition(radius, angle)));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
      <line geometry={geometry}>
        <lineBasicMaterial color="#ffffff" opacity={0.15} transparent />
      </line>
    );
  }

  return (
    <group position={[0, 0, 0]}>
      {/* Lighting for 3D effect */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[20, 20, 20]} intensity={1.2} castShadow />
      {radii.map((radius, i) => (
        <group key={radius}>
          <OrbitCircle radius={radius} />
          {elements.map((el, idx) => (
            <OrbitingElement
              key={`${radius}-${idx}`}
              radius={radius}
              speed={i === 1 ? -(0.05 + 0.02 * i) : 0.05 + 0.02 * i} // much slower speeds for both orbits
              offset={(Math.PI * 2 * idx) / elements.length}
            >
              {allShapes[idx]}
            </OrbitingElement>
          ))}
        </group>
      ))}
    </group>
  );
} 