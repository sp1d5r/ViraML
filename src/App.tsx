import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import Landing from './pages/Landing';

const App : React.FC = () => (
  <div>
    <ReactLenis root>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ReactLenis>
  </div>
);

export default App;
