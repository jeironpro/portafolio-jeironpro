import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function ParticleField() {
    const mesh = useRef();
    const { pointer } = useThree();
    const scrollY = useRef(0);
    const currentOpacity = useRef(0.45);

    const COUNT = 150;

    const positions = useMemo(() => {
        const pos = new Float32Array(COUNT * 3);
        const seed = 54321;
        let s = seed;
        for (let i = 0; i < COUNT * 3; i++) {
            s = (s * 16807 + 0) % 2147483647;
            pos[i] = ((s / 2147483647) * 2 - 1) * 14;
        }
        return pos;
    }, []);

    const sizes = useMemo(() => {
        const s = new Float32Array(COUNT);
        const seed = 98765;
        let v = seed;
        for (let i = 0; i < COUNT; i++) {
            v = (v * 16807 + 0) % 2147483647;
            s[i] = 0.04 + (v / 2147483647) * 0.06;
        }
        return s;
    }, []);

    const colors = useMemo(() => {
        const c = new Float32Array(COUNT * 3);
        const azul = new THREE.Color('#2563EB');
        const azulClaro = new THREE.Color('#60A5FA');
        const naranja = new THREE.Color('#F97316');
        const palette = [azul, azul, azul, azulClaro, azulClaro, naranja];
        const seed = 12345;
        let v = seed;
        for (let i = 0; i < COUNT; i++) {
            v = (v * 16807 + 0) % 2147483647;
            const idx = Math.floor((v / 2147483647) * palette.length);
            const color = palette[Math.min(idx, palette.length - 1)];
            c[i * 3] = color.r;
            c[i * 3 + 1] = color.g;
            c[i * 3 + 2] = color.b;
        }
        return c;
    }, []);

    useEffect(() => {
        const onScroll = () => {
            scrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.elapsedTime;
        const pos = mesh.current.geometry.attributes.position.array;

        const sf = Math.min(scrollY.current / (document.documentElement.scrollHeight - window.innerHeight || 1), 1);
        currentOpacity.current += (0.45 - sf * 0.3 - currentOpacity.current) * 0.05;

        for (let i = 0; i < COUNT; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            const z = positions[i3 + 2];
            const wave1 = Math.sin(x * 0.4 + t * 0.3) * 0.4;
            const wave2 = Math.cos(z * 0.4 + t * 0.2) * 0.4;
            pos[i3 + 1] =
                positions[i3 + 1] +
                (wave1 + wave2 + Math.sin(t * 0.5 + i) * 0.3 - pos[i3 + 1]) * 0.02;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;

        const scrollOffset = scrollY.current * 0.002;
        mesh.current.rotation.y += 0.0004;
        mesh.current.rotation.x = Math.sin(t * 0.08) * 0.05 + pointer.y * 0.1 + scrollOffset * 0.05;
        mesh.current.rotation.z = Math.cos(t * 0.06) * 0.03 + pointer.x * 0.05;

        if (mesh.current.material) {
            mesh.current.material.opacity = currentOpacity.current;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={COUNT}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={COUNT}
                    array={sizes}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={COUNT}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                vertexColors
                transparent
                opacity={0.45}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function BackgroundCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
            gl={{ antialias: true, alpha: true }}
        >
            <ParticleField />
        </Canvas>
    );
}
