import React, {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {LoadingScreen} from "./components/loading-screen/LoadingScreen";

const App : React.FC = () => {
  const comp = useRef(null);
  const disabledAnimation = false;

  return (
    <div ref={comp} >
      {!disabledAnimation && <LoadingScreen comp={comp} disabled={disabledAnimation}/> }
    </div>
  );
}

export default App;

