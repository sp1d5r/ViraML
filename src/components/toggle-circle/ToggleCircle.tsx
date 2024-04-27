import React from 'react';

interface ToggleCircleProps {
  active: boolean;
  onClick: () => void;
  index: number,
  label: string;
}

const ToggleCircle: React.FC<ToggleCircleProps> = ({
  active, onClick, index, label,
}) => (
  <button
    type="button"
    className="relative w-[18%] aspect-square p-5 flex flex-col justify-center items-center bg-none disabled:dark:text-black disabled:text-white dark:text-white font-questrial gap-1 text-xl"
    disabled={active}
    onClick={onClick}
  >
    {/* Circle Outline */}
    <div className={`absolute z-0 max-w-max p-5 w-[110%] h-[110%] aspect-square border-dashed border-2 ${!active ? 'border-black dark:border-white' : 'border-black bg-black dark:bg-white'} dark:border-white rounded-full flex flex-col justify-center items-center`}>
      <p className="z-20">
        {index}
        )
      </p>
      <p className="hidden md:flex z-20">{label}</p>
    </div>
  </button>
);

export default ToggleCircle;
