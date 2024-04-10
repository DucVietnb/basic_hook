import { useCallback, memo } from "react";

function TrainUseCallback({ onIncrease, onDevide }) {
  console.log("re-render");
  return (
    <div>
      <h1>TrainUseCallback</h1>
      <button onClick={onIncrease}>Up</button>
      <button onClick={onDevide}>/2</button>
    </div>
  );
}

export default memo(TrainUseCallback);
