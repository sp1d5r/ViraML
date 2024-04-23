import React from 'react';
import LogoTopLeft from '../../assets/logo/LogoTopLeft.svg';
import LogoBottomRight from '../../assets/logo/LogoBottomRight.svg';

export interface LogoProps {
  collapsed: boolean
  link: string;
}

export const Logo : React.FC<LogoProps> = ({ collapsed, link = '/' }) => {
  if (collapsed) {
    return (
      <a href={link} className="flex items-center">
        {/* <img src="Logo Source Here?" className="mr-3 h-6 sm:h-9" alt="logo" /> */}
        <span className="flex text-white items-center text-xl font-semibold relative">
          <div className="relative w-10 h-10">
            <img
              src={LogoTopLeft}
              alt="Logo"
              className="absolute top-0 left-0 object-contain h-full w-full invert dark:invert-0"
            />
            <img
              src={LogoBottomRight}
              alt="Logo"
              className="absolute top-0 left-0 object-contain h-full w-full invert dark:invert-0"
            />
          </div>
        </span>
      </a>
    );
  }
  return (
    <a href={link} className="flex items-center">
      {/* <img src="Logo Source Here?" className="mr-3 h-6 sm:h-9" alt="logo" /> */}
      <span className="flex text-white items-center text-xl font-semibold relative">
        <div className="relative w-10 h-10">
          <img
            src={LogoTopLeft}
            alt="Logo"
            className="absolute top-0 left-0 object-contain h-full w-full invert dark:invert-0"
          />
          <img
            src={LogoBottomRight}
            alt="Logo"
            className="absolute top-0 left-0 object-contain h-full w-full invert dark:invert-0"
          />
        </div>
        <span className="relative -left-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">iraML</span>
      </span>
    </a>
  );
};
