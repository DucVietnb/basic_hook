import { memo } from "react";
function TrainReactMemo({ check }) {
  return <h1>TrainReactMemo {check}</h1>;
}

export default memo(TrainReactMemo);
