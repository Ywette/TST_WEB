'use client';

import { Canvas } from '@react-three/fiber';
import StarBackground from './StarBackground';
import Orbits from './Orbits';
import styles from '../styles/StarBackgroundContainer.module.css';

export default function StarBackgroundContainer() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                background: 'var(--bg-dark)',
                overflow: 'hidden',
            }}
        >
            <div className={`${styles.auroraGlow} ${styles.auroraGlow1}`}></div>
            <div className={`${styles.auroraGlow} ${styles.auroraGlow2}`}></div>
            <Canvas
                camera={{ position: [0, 0, 50], fov: 75 }}
                style={{ background: 'transparent', width: '100%', height: '100%' }}
            >
                <StarBackground />
                {/* Move Orbits group to the right by shifting its position on the x-axis */}
                <group position={[65, 0, 0]}>
                    <Orbits />
                </group>
            </Canvas>
        </div>
    );
}