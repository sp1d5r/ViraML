import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollableLayout from '../layouts/ScrollableLayout';
import LandingIllustration from '../assets/landing/display.svg';
import DesktopIllustration from '../assets/landing/DesktopImage.svg';
import MobileIllustration from '../assets/landing/MobileImage.svg';
import ONNX from '../assets/Icons/onnx.png';
import Golem from '../assets/Icons/golem.png';
import IPFS from '../assets/Icons/ipfs.png';

const Landing : React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from('#LandingTitle', {
        opacity: 0,
        duration: 0.5,
        delay: 4.3,
      }).from('#LandingSubtext', {
        opacity: 0,
        duration: 0.5,
      }).from('#MobileIllustration', {
        yPercent: '+100',
        duration: 0.3,
      }).from('#DesktopIllustration', {
        yPercent: '+100',
        duration: 0.3,
      });
    }, comp);

    return () => ctx.revert();
  }, [comp]);

  return (
    <ScrollableLayout loadingAnimation>
      <section ref={comp} className="bg-white dark:bg-black min-h-[90vh] flex justify-center">
        <div
          className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12 border-x border-black dark:border-white"
        >
          <div
            className="flex flex-col mr-auto place-self-center lg:col-span-7 h-full border-x border-black sm:dark:border-whiteborder-x sm:dark:border-white"
          >
            <div className="flex-1 flex flex-col items-start justify-center p-8">
              <h1
                id="LandingTitle"
                className="max-w-2xl mb-4 text-4xl font-questrial leading-none md:text-5xl xl:text-6xl dark:text-white"
              >
                On-Chain
                ML with Open Source Infrastructure.
              </h1>
              <p
                id="LandingSubtext"
                className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
              >
                Deploy
                trained models to our L2 for inference. Securely and reliably access models,
                while achieving high model
                throughput.
              </p>
              <div className="flex w-full">
                <input
                  type="text"
                  className="bg-gray-50 border border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Full Name"
                />
                <button type="button" className="text-white dark:text-black bg-black dark:bg-white w-[20%]">
                  Submit Email
                </button>
              </div>
            </div>
            <div className="min-h-16 flex w-full flex-wrap">
              <div
                className="flex-1 dark:bg-black border-t border-r border-black dark:border-white bg-white dark:text-white flex justify-center items-center min-w-[200px] h-16 p-2"
              >
                <img src={ONNX} alt="ONNX" className="h-full object-contain" />
              </div>

              <div
                className="flex-1 dark:bg-black border-t border-r border-black dark:border-white bg-white dark:text-white flex justify-center items-center min-w-[200px] h-16 p-2"
              >
                <img src={Golem} alt="GOLEM" className="h-full object-contain" />
              </div>

              <div
                className="flex-1 dark:bg-black border-t border-black dark:border-white bg-white dark:text-white flex justify-center items-center min-w-[200px] h-16 p-2"
              >
                <img src={IPFS} alt="IPFS" className="h-full object-contain" />
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative bg-gradient-to-bl from-green-500 to-teal-300">
            <img className="w-full h-full object-cover absolute " src={LandingIllustration} alt="Landing" />
            <img id="MobileIllustration" className="w-full h-full object-cover absolute" src={MobileIllustration} alt="Landing Mobile Layer" />
            <img id="DesktopIllustration" className="w-full h-full object-cover absolute" src={DesktopIllustration} alt="Landing Desktop" />
          </div>
        </div>
      </section>
    </ScrollableLayout>
  );
};

export default Landing;
