import React, { useLayoutEffect, useRef, useState } from 'react';
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
import WhyLight from '../assets/landing/WHYDark.svg';
import Facebook from '../assets/landing/facebook.png';
import OpenAI from '../assets/landing/OpenAI.png';
import Groq from '../assets/landing/Groq.png';
import Explanation from '../components/explanation/Explanation';

const Landing : React.FC = () => {
  const landingComp = useRef(null);
  const aboutViraMLComp = useRef(null);
  const whyComp = useRef(null);

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

  useLayoutEffect(() => {
    const whySection = whyComp.current;

    if (whySection) {
      gsap.fromTo('#WhyMain', { opacity: 0 }, {
        scrollTrigger: {
          trigger: '#WhyMain',
          start: 'top 80%',
          end: 'top 75%',
          scrub: true,
          toggleActions: 'play reverse pause pause',
        },
        opacity: 1,
      });

      gsap.fromTo('#WhyMain', { scale: 1 }, {
        scrollTrigger: {
          trigger: '#WhyMain',
          start: 'top 60%',
          end: 'top 55%',
          scrub: true,
          pin: false,
          toggleActions: 'play reverse pause pause',
        },
        scale: 1.5,
      });

      gsap.fromTo(['#WhyMainLeft1', '#WhyMainLeft2', '#WhyMainLeft3'], { xPercent: 0, opacity: 0 }, {
        scrollTrigger: {
          trigger: '#WhyMain',
          start: 'top 60%',
          end: 'top 55%',
          scrub: true,
          pin: false,
          toggleActions: 'play reverse pause pause',
        },
        xPercent: (i) => -120 * (i + 1),
        opacity: 0.2,
      });
      gsap.fromTo(['#WhyMainRight1', '#WhyMainRight2', '#WhyMainRight3'], { xPercent: 0, opacity: 0 }, {
        scrollTrigger: {
          trigger: '#WhyMain',
          start: 'top 60%',
          end: 'top 55%',
          scrub: true,
          pin: false,
          toggleActions: 'play reverse pause pause',
        },
        xPercent: (i) => +120 * (i + 1),
        opacity: 0.2,
      });
      gsap.fromTo(['#FacebookCard', '#GroqCard', '#OpenAiCard'], { yPercent: (i) => -(10 * 2), opacity: 0 }, {
        scrollTrigger: {
          trigger: '#WhyMain',
          start: 'top 55%',
          end: 'top 35%',
          scrub: true,
          pin: false,
          toggleActions: 'play reverse pause pause',
        },
        yPercent: 0,
        stagger: 0.2,
        opacity: 1,
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
          <span id="AboutVira" className="text-7xl text-black m-auto my-[70px] dark:text-white font-questrial">
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

      {/* Explantion */}
      <Explanation />

      {/* Why */}
      <section ref={whyComp} className="relative bg-white dark:bg-black pb-16 flex flex-col justify-start items-center overflow-hidden">
        <div id="WhyContainer" className="w-full flex justify-center items-center h-64">
          <img id="WhyMainLeft1" className="absolute" src={WhyLight} alt="Why" />
          <img id="WhyMainLeft2" className="absolute" src={WhyLight} alt="Why" />
          <img id="WhyMainLeft3" className="absolute" src={WhyLight} alt="Why" />
          <img id="WhyMainRight1" className="absolute" src={WhyLight} alt="Why" />
          <img id="WhyMainRight2" className="absolute" src={WhyLight} alt="Why" />
          <img id="WhyMainRight3" className="absolute" src={WhyLight} alt="Why" />
          <span id="WhyMain" className="absolute text-[80px] my-[70px] dark:text-white font-questrial text-purple-300">WHY?</span>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-10 items-center max-w-screen-xl">
          <a id="FacebookCard" href="https://www.youtube.com/watch?v=i-o5YbNfmh0" className="flex flex-wrap gap-2">
            <div className="border border-black dark:border-white rounded-xl sm:w-auto min-w-[350px] max-w-[400px] h-[350px] text-black dark:text-white py-10 px-5 hover:scale-110 transition-all flex flex-col gap-2 items-center justify-evenly">
              <img src={Facebook} alt="Zucc" className="aspect-square invert dark:invert-0 h-[50px]" />
              <p className="text-sm">Mark Zuckerberg</p>
              <p className="text-lg font-questrial font-bold text-center">Energy, not computel The Bottleneck to AI</p>
              <p className="text-gray-500 text-sm">
                “Meaningful nuclear power plant only going towards training
                a model and then you run into these things ... like getting energy permitted is
                like a very heavily regulated government function...”
              </p>
            </div>
          </a>

          <a id="GroqCard" href="https://www.youtube.com/watch?v=Z0jqIk7MUfE&ab_channel=MatthewBerman" className="flex flex-wrap gap-2">
            <div className=" border border-black dark:border-white rounded-xl w-[350px] sm:w-auto  max-w-[400px] h-[350px] text-black dark:text-white py-10 px-5 hover:scale-110 transition-all flex flex-col gap-2 items-center justify-evenly">
              <img src={Groq} alt="Groq" className=" invert dark:invert-0 h-[50px]" />
              <p className="text-sm">Jonathan Ross</p>
              <p className="text-lg font-questrial font-bold text-center">Compute is the new oil</p>
              <p className="text-gray-500 text-sm">
                “what we often see is people will train a
                model and then they`&apos;ll go mission
                accomplished we`&apos;ve succeeded now we`&apos;re
                going to put it into production and then
                all of a sudden they realize they`&apos;re
                going to have to spend 10 to 20x to
                deploy it...”
              </p>
            </div>
          </a>

          <a id="OpenAiCard" href="https://www.youtube.com/watch?v=jvqFAi7vkBc&t=4208s&ab_channel=LexFridman" className="flex flex-wrap gap-2">
            <div className="border border-black dark:border-white rounded-xl min-w-[350px] w-[350px] sm:w-auto max-w-[400px] h-[350px] text-black dark:text-white py-10 px-5 hover:scale-110 transition-all flex flex-col gap-2 items-center justify-evenly">
              <img src={OpenAI} alt="OpenAI" className="aspect-square invert dark:invert-0 h-[50px]" />
              <p className="text-sm">Sam Altman</p>
              <p className="text-lg font-questrial font-bold text-center"> $7 Trillion of Compute</p>
              <p className="text-gray-500 text-sm">
                ”Look, I think compute is gonna be the currency of the
                future. I think it will be maybe the most precious
                commodity in the world. And I think we should be investing
                heavily to make a lot more compute...”
              </p>
            </div>
          </a>
        </div>
      </section>
    </ScrollableLayout>
  );
};

export default Landing;
