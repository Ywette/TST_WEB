'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarBackground() {
    const starsRef = useRef();
    const count = 1000; // Number of stars per set
    const totalStars = count * 2; // Two sets of stars
    const width = 200; // Width of each star set

    // Generate random positions, sizes, and colors for stars
    const { positions, sizes, colors } = useMemo(() => {
        const positions = new Float32Array(totalStars * 3);
        const sizes = new Float32Array(totalStars);
        const colors = new Float32Array(totalStars * 3);
        
        // Create two sets of stars
        for (let i = 0; i < totalStars; i++) {
            const i3 = i * 3;
            // First set of stars (0 to count-1)
            if (i < count) {
                positions[i3] = (Math.random() - 0.5) * width; // x
                positions[i3 + 1] = (Math.random() - 0.5) * 100; // y
                positions[i3 + 2] = (Math.random() - 0.5) * 50; // z
            } 
            // Second set of stars (count to totalStars-1)
            else {
                positions[i3] = (Math.random() - 0.5) * width + width; // x offset by width
                positions[i3 + 1] = (Math.random() - 0.5) * 100; // y
                positions[i3 + 2] = (Math.random() - 0.5) * 50; // z
            }
            // Random size: 1 or 2
            sizes[i] = 1 + Math.floor(Math.random() * 2);
            // Color: randomly green or yellow
            if (Math.random() < 0.5) {
                // Green: rgb(0, 1, 0)
                colors[i3] = 0.0;
                colors[i3 + 1] = 1.0;
                colors[i3 + 2] = 0.0;
            } else {
                // Yellow: rgb(1, 1, 0)
                colors[i3] = 1.0;
                colors[i3 + 1] = 1.0;
                colors[i3 + 2] = 0.0;
            }
        }
        return { positions, sizes, colors };
    }, []);

    // Animate stars moving from right to left
    useFrame(() => {
        if (starsRef.current) {
            // Move stars to the left (negative x direction)
            starsRef.current.position.x -= 0.02; // Slower movement
            
            // Reset position when stars move too far left
            if (starsRef.current.position.x < -width) {
                starsRef.current.position.x = 0;
            }
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={sizes.length}
                    array={sizes}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                vertexShader={`
                    attribute float size;
                    attribute vec3 color;
                    varying vec3 vColor;
                    void main() {
                        vColor = color;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        gl_PointSize = size;
                    }
                `}
                fragmentShader={`
                    varying vec3 vColor;
                    void main() {
                        gl_FragColor = vec4(vColor, 1.0);
                    }
                `}
                transparent={false}
            />
        </points>
    );
}

export default StarBackground; 