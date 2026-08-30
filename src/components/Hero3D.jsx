import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./Hero3D.module.css";

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- lighting ---
    const brassLight = new THREE.PointLight(0xf0c674, 6, 20);
    brassLight.position.set(3, 2, 4);
    scene.add(brassLight);

    const indigoLight = new THREE.PointLight(0x6e6bff, 5, 20);
    indigoLight.position.set(-3, -2, 3);
    scene.add(indigoLight);

    const ambient = new THREE.AmbientLight(0x30303a, 1.1);
    scene.add(ambient);

    // --- shard cluster: a signature "viewfinder shatter" ---
    const group = new THREE.Group();
    const shardGeos = [
      new THREE.IcosahedronGeometry(1.3, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TetrahedronGeometry(0.55, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.IcosahedronGeometry(0.35, 0),
    ];

    const positions = [
      [0, 0, 0],
      [1.4, 0.9, -0.6],
      [-1.3, -0.7, 0.4],
      [0.9, -1.1, 0.7],
      [-1.1, 1.0, -0.3],
    ];

    const shards = [];
    shardGeos.forEach((geo, i) => {
      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x1e1b28 : 0x171526,
        metalness: 0.4,
        roughness: 0.25,
        flatShading: true,
      });
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(...positions[i]);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      group.add(mesh);

      const wireGeo = new THREE.EdgesGeometry(geo);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0xf0c674,
        transparent: true,
        opacity: 0.35,
      });
      const wire = new THREE.LineSegments(wireGeo, wireMat);
      mesh.add(wire);

      shards.push({ mesh, speed: 0.15 + Math.random() * 0.25 });
    });

    scene.add(group);

    // --- pointer parallax ---
    const pointer = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    let raf;
    let t = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      t += delta;

      if (!reducedMotion) {
        group.rotation.y += delta * 0.18;
        shards.forEach(({ mesh, speed }, i) => {
          mesh.rotation.x += delta * speed * 0.4;
          mesh.rotation.y += delta * speed * 0.3;
          mesh.position.y +=
            Math.sin(t * speed + i) * 0.0006;
        });
      }

      targetRot.x += (pointer.y * 0.35 - targetRot.x) * 0.04;
      targetRot.y += (pointer.x * 0.5 - targetRot.y) * 0.04;
      group.rotation.x = targetRot.x;
      group.rotation.z = targetRot.y * 0.3;
      camera.position.x += (targetRot.y * 1.1 - camera.position.x) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      shardGeos.forEach((g) => g.dispose());
      shards.forEach(({ mesh }) => {
        mesh.material.dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={styles.canvasHost} aria-hidden="true" />;
}
