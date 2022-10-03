import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  function Plane(props) {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
      ...props
    }));
    return (
      <mesh ref={ref}>
        <planeGeometry args={[100, 100]} />
      </mesh>
    );
  }

  function Cube(props) {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
    return (
      <mesh ref={ref}>
        <boxGeometry />
      </mesh>
    );
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Canvas>
        <OrbitControls makeDefault />
        <Physics>
          <Plane />
          <Cube />
        </Physics>
      </Canvas>
    </div>
  );
}
