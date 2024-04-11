import { useState, useEffect } from "react";
import TestToggle from "./Training/TestToggle";
import TrainUseState from "./Training/TrainUseState";
import TrainUseEffect from "./Training/TrainUseEffect";
import TrainUseRef from "./Training/TrainUseRef";
import TrainReactMemo from "./Training/TrainReactMemo";
import TrainReducer from "./Training/TrainReducer";
import Index from "./Training/Todo/Index";
import TrainUseContext from "./Training/TrainUseContext/TrainUseContext";
function App() {
  const [showTrainUseState, setshowTrainUseState] = useState(false);
  const [showTrainUseEffect, setShowTrainUseEffect] = useState(false);
  const [showTrainUseRef, setShowTrainUseRef] = useState(false);
  const [showTrainReactMemo, setShowTrainReactMemo] = useState(true);
  const [showToggle, setShowToggle] = useState(false);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className="train-usestate" style={{ margin: 10 }}>
        <button onClick={() => setshowTrainUseState(!showTrainUseState)}>
          show Train UseState
        </button>
        {showTrainUseState && <TrainUseState />}
      </div>

      <div className="train-useeffect" style={{ margin: 10 }}>
        <button onClick={() => setShowTrainUseEffect(!showTrainUseEffect)}>
          show Train useEffect
        </button>
        {showTrainUseEffect && <TrainUseEffect />}
      </div>

      <div className="train-useref" style={{ margin: 10 }}>
        <button onClick={() => setShowTrainUseRef(!showTrainUseRef)}>
          show Train useRef
        </button>
        {showTrainUseRef && <TrainUseRef />}
      </div>
      <div className="train-react-memo" style={{ margin: 10 }}>
        <button onClick={() => setShowTrainReactMemo(!showTrainReactMemo)}>
          showTrainReactMemo
        </button>
        {showTrainReactMemo && <TrainReactMemo check={showTrainReactMemo} />}
      </div>

      <div>
        {/* <Index /> */}haha
        <TrainUseContext />
      </div>

      <div style={{ height: "100px" }}></div>
    </div>
  );
}

export default App;
