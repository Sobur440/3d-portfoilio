import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div
      className={`loader-overlay ${progress === 100 && !active ? "done" : ""}`}
    >
      <div className="word">Machi Nasai!✋🏾</div>
      <p className={`progress`}>{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
