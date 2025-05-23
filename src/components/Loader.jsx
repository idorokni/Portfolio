import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default Loader