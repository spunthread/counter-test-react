import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Counter({ onDestroy = () => {}, id = "" }) {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isPaused) {
      const iid = setInterval(() => setCount((prevCount) => prevCount + direction), 1e3);
      return () => clearInterval(iid);
    }
  }, [isPaused, direction]);

  return (
    <div className="box">
      <strong className="count">{count}</strong>
      <p className="controls">
        <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "Play" : "Pause"}</button>
        <button onClick={() => setDirection(direction * -1)}>
          {direction === 1 ? "Down" : "Up"}
        </button>
        <button onClick={() => onDestroy(id)}>Delete</button>
      </p>
    </div>
  );
}
