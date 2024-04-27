import React, { useState } from 'react';
import ToggleCircle from '../toggle-circle/ToggleCircle';

const Explanation: React.FC = () => {
  const [active, setActive] = useState(0);
  const title = [
    '0) Model Partitioning',
    '1) Lightweight GMM',
    '2) Decentralised Model Storage',
    '3) Execution Deployed',
    '4) Users Request Inference',
  ];
  const explanation = [
    'We partition models based on their number of parameters.\n'
    + '            This allows each partition to be the same size.\n'
    + '            Given a single ONNX file we’re able to produce several\n'
    + '            partitions for models up to 200M parameters.',
    'After partitioning the models we generate lightweight gaussian mixture '
    + 'models to map the output space. This is the same technology used in '
    + 'GANs, essentially allowing us to probabilistically determine the '
    + 'likelihood of a model being ran.',
    'The model gets uploaded to a distributed file system, where '
    + 'popular models are cached on miners for future use. Allowing '
    + 'models to be saved for their lifetime.',
    'Execution of the model gets deployed to GOLEM - im not sure '
    + 'if this is the best way to reward miners for running the model. '
    + 'We shall see.',
    'Any user requests get passed to miners where in-exchange for performing '
    + 'inference miners are rewarded, users are able to retrieve their output '
    + 'in the format to be expected, additionally model owners retrieve '
    + 'comission on marketplaces.',
  ];
  return (
    <section id="How" className="relative bg-white dark:bg-black pb-16 flex flex-col justify-start items-center overflow-hidden py-8">
      <div
        className="flex flex-col max-w-screen-xl mx-auto lg:gap-8 xl:gap-0"
      >
        <div className="flex flex-col sm:flex-row w-full p-5">
          <h1 className="text-black dark:text-purple-300 font-questrial text-[50px] flex-1">{title[active]}</h1>
          <p className="text-black dark:text-white font-questrial sm:w-[30%] ">
            {explanation[active]}
          </p>
        </div>
        <div className="flex w-full py-16">
          <div className="w-full px-5 justify-center text-black dark:text-white flex">
            <ToggleCircle
              label="Model Partitioning"
              active={active === 0}
              onClick={() => setActive(0)}
              index={0}
            />
            <ToggleCircle
              label="Lightweight Gaussian Mixture Model"
              active={active === 1}
              onClick={() => setActive(1)}
              index={1}
            />
            <ToggleCircle
              label="Decentralised Model File Upload"
              active={active === 2}
              onClick={() => setActive(2)}
              index={2}
            />
            <ToggleCircle
              label="Execution Deployed to GOLEM"
              active={active === 3}
              onClick={() => setActive(3)}
              index={3}
            />
            <ToggleCircle
              label="Users Request Inference"
              active={active === 4}
              onClick={() => setActive(4)}
              index={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explanation;
