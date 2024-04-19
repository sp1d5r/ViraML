import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import LogoBottomRight from "../../assets/logo/LogoBottomRight.svg";
import LogoTopLeft from "../../assets/logo/LogoTopLeft.svg";

export interface LoadingScreenProps {
  comp: React.MutableRefObject<any>;
  disabled: boolean;
}

export const LoadingScreen : React.FC<LoadingScreenProps> = ({comp, disabled}) => {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (disabled) return;

      let timeline = gsap.timeline();

      timeline.from("#LoadingScreenPage", {
        xPercent: "-200",
        duration: 0.5,
        delay: 0
      }).from(["#LogoBottomRight", "#LogoTopLeft"],{
        opacity: 0,
        duration: 0.5,
        delay: 0
      }).from("#LogoBottomRight", {
        xPercent: "-4.4",
        duration: 0.3,
        delay:0
      }).from(["#LogoTextI", "#LogoTextR", "#LogoTextA", "#LogoTextM", "#LogoTextL"], {
        opacity:0,
        xPercent: "-20",
        stagger: 0.2,
        delay: 0
      }).from(["#LogoTextM", "#LogoTextL"], {
        color: "white",
        duration: 0.4
      }).from("#LoadingScreenSubText", {
        yPercent: "-20",
        opacity: 0,
        duration: 0.2,
      }).from("#LoadingScreenPage", {
        xPercent: "-100",
        duration: 0.3,
        delay:1
      })
    }, comp);

    return () => ctx.revert();
  }, [])

  return <div hidden={disabled} id="LoadingScreenPage" className="w-screen h-screen bg-black flex justify-center items-center flex-col gap-2 left-[100vw]">
    <span className="flex gap-1 text-white items-center text-xl">
      <div className="relative w-10 h-10">
        <img id="LogoTopLeft" src={LogoTopLeft} alt="Logo" className={"absolute top-0 left-0 object-contain h-full w-full"} />
        <img id="LogoBottomRight" src={LogoBottomRight} alt="Logo" className={"absolute top-0 left-0 object-contain h-full w-full"} />
      </div>
      <p id="LogoTextI" className="text-2xl">I</p>
      <p id="LogoTextR" className="text-2xl">R</p>
      <p id="LogoTextA" className="text-2xl">A</p>
      <p id="LogoTextM" className="text-purple-300 text-2xl font-bold">M</p>
      <p id="LogoTextL" className="text-purple-300 text-2xl font-bold">L</p>
    </span>
    <span id="LoadingScreenSubText" className="text-white font-bold">On-Chain Machine Learning for <span className="text-purple-300">DeFI Applications.</span></span>
  </div>
}