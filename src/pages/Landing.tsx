import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollableLayout from '../layouts/ScrollableLayout';
import LandingIllustration from '../assets/landing/display.svg';
import DesktopIllustration from '../assets/landing/DesktopImage.svg';
import MobileIllustration from '../assets/landing/MobileImage.svg';
import ONNX from '../assets/Icons/onnx.png';
import Golem from '../assets/Icons/golem.png';
import IPFS from '../assets/Icons/ipfs.png';
import Banner from '../assets/landing/ViraNovaBanner.svg';

const Landing : React.FC = () => {
  const landingComp = useRef(null);
  const aboutViraMLComp = useRef(null);

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
        yPercent: '+70',
        duration: 0.3,
      }).from('#DesktopIllustration', {
        yPercent: '+70',
        duration: 0.3,
      });
    }, landingComp);

    return () => ctx.revert();
  }, [landingComp]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = aboutViraMLComp.current;

    if (triggerElement) {
      // Horizontal scroll for the Top Banner
      gsap.fromTo('#TopBanner', {
        xPercent: 0, // Start from fully right off-screen
      }, {
        xPercent: -30, // End fully left off-screen
        ease: 'none',
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 70%', // Start animation when the top of the triggerElement is at the top of the viewport
          end: 'bottom top', // End when the bottom of the triggerElement is at the top of the viewport
          scrub: true,
        },
      });

      // Horizontal scroll for the Bottom Banner
      gsap.fromTo('#BottomBanner', {
        xPercent: -30, // Start from fully left off-screen
      }, {
        xPercent: 0, // End fully right off-screen
        ease: 'none',
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 70%', // Same as above
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <ScrollableLayout loadingAnimation>
      {/* Hero Section */}
      <section className="bg-white dark:bg-black min-h-[90vh] flex justify-center" ref={landingComp}>
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
                <img src={ONNX} alt="ONNX" className="h-full invert dark:invert-0 object-contain" />
              </div>

              <div
                className="flex-1 dark:bg-black border-t border-r border-black dark:border-white bg-white dark:text-white flex justify-center items-center min-w-[200px] h-16 p-2"
              >
                <img src={Golem} alt="GOLEM" className="h-full invert dark:invert-0 object-contain" />
              </div>

              <div
                className="flex-1 dark:bg-black border-t border-black dark:border-white bg-white dark:text-white flex justify-center items-center min-w-[200px] h-16 p-2"
              >
                <img src={IPFS} alt="IPFS" className="h-full invert dark:invert-0 object-contain" />
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

      {/* About Vira ML */}
      <section ref={aboutViraMLComp} className="relative bg-white dark:bg-black min-h-[70vh] flex justify-center items-center border-t border-black dark:border-white overflow-hidden">

        {/* Motion Background text */}
        <img id="TopBanner" className="absolute top-16 max-w-max w-[2800px] invert dark:invert-0 opacity-90" src={Banner} alt="ViraML" />

        <div className="my-8 p-8 flex flex-col">
          <span className="text-7xl text-black m-auto my-[70px] dark:text-white font-questrial">
            About Vira
            <span className="text-purple-300">ML</span>
          </span>

          <div className="flex gap-5 md:text-lg lg:text-xl">
            <a href="/" className="font-questrial px-8 py-6 bg-black text-white max-h-14 flex justify-center items-center dark:bg-white dark:text-black">
              Learn More
            </a>

            {/* Breif introduction */}

            <div className="flex flex-col gap-5 text-black dark:text-white relative">
              <span className="font-questrial max-w-[500px] ">
                ViraML focuses on delivering
                {' '}
                <span className="underline">
                  high throughput
                  models
                  {' '}
                </span>
                {' '}
                while ensuring verifiability
                and inter-chain operability.
                {' '}
              </span>
              <p className="font-questrial max-w-[500px]">
                Through model partitioning we’re able to break
                {' '}
                up models into smaller more manageable components.
              </p>
              <p className="font-questrial max-w-[500px]">
                Using lightweight gaussian mixture models we can
                {' '}
                model the distribution of the partitioned models output space.
              </p>
              <p className="font-questrial max-w-[500px]">
                Allowing for fast, reliable and scalable model verification.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Banner */}
        <img id="BottomBanner" className="absolute bottom-0 max-w-max w-[2800px] invert dark:invert-0 opacity-90" src={Banner} alt="ViraML" />
      </section>

    </ScrollableLayout>
  );
};

export default Landing;
