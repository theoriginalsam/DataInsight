import React from "react";
import { Suspense, useMemo, useCallback, useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

const Points = () => {
  const texture = useLoader(THREE.TextureLoader, "circle2.png");
  const bufferRef = useRef<any>();

  // phase shift
  let t = 0;
  // frequency
  let f = 0.001;
  // amplitude
  let a = 2;

  const graph = useCallback(
    (x: number, z: number) => {
      //return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );
  const count = 200;
  const sep = 2;
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        //let x = sep * (xi - count / 2);
        let x = 2 * sep * xi + 1;
        //let z = sep * (zi - count / 2);
        let z = 2 * sep * zi;
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;
    const positions = bufferRef.current.array;

    let i = 0;

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        //let x = sep * (xi - count / 2);
        let x = 2 * sep * xi + 1;
        //let z = sep * (zi - count / 2);
        let z = 2 * sep * zi;
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={texture}
        color={0x00aaff}
        size={0.3}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};

const AnimationCanvas = () => {
  return (
    <Canvas
      //colorManagement={false}
      camera={{ position: [100, -30, 100], fov: 10 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};

const Waves = () => {
  return (
    <div className="w-screen h-full absolute">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
};

export default Waves;
