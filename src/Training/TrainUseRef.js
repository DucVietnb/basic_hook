import { useEffect, useState, useRef } from "react";
function TrainUseRef() {
  const [count, setCount] = useState(0);
  const timerId = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  const handleCountUp = () => {
    timerId.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  return (
    <div className="train-use-ref">
      <h1>{count}</h1>
      <button onClick={handleCountUp}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <h1>prev count : {prevCount.current}</h1>
    </div>
  );
}
export default TrainUseRef;
