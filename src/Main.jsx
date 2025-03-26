import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import LoadingScreen from "./LoadingScreen.jsx";

const Main = () => {
  return (
    <>
      <LoadingScreen />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <color args={["#695b5b"]} attach="background" />
        <Experience />
      </Canvas>
    </>
  );
};

export default Main;
