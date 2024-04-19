import React, { useRef } from 'react';
import { LoadingScreen } from './components/loading-screen/LoadingScreen';

const App : React.FC = () => {
  const comp = useRef(null);
  const disabledAnimation = false;

  return (
    <div ref={comp}>
      {!disabledAnimation && <LoadingScreen comp={comp} disabled={disabledAnimation} /> }
    </div>
  );
};

export default App;
