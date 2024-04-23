import React, { useRef } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { LoadingScreen } from '../components/loading-screen/LoadingScreen';

interface ContentLayoutProps {
  children: React.ReactNode;
  loadingAnimation: boolean;
}

const ScrollableLayout: React.FC<ContentLayoutProps> = ({ children, loadingAnimation }) => {
  const comp = useRef(null);

  return (
    <div ref={comp} className="flex flex-col min-h-screen dark:bg-black">
      {loadingAnimation && <LoadingScreen comp={comp} disabled={!loadingAnimation} /> }
      <Navbar />
      <main className="flex-grow relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ScrollableLayout;
