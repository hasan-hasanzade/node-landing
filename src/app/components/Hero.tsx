import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section>
      <div className='container max-w-[1430px] mt-24'>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='font-inter-semibold text-6xl flex flex-col items-center'>
                <span className='text-primary'>All the Top Nodes <span className='text-white'>Ready</span></span>
                <span>in a Few Clicks</span>
            </h1>
            <div className='p-3 bg-foreground rounded-[10px] flex items-center h-20 gap-10 mt-10 max-w-[655px] w-full justify-between'>
                <p className='text-gray font-inter-medium text-lg pl-[28px]'>Tailored for Web3 Degens, with Love</p>
                <a href="#" className='bg-primary font-inter-medium text-lg max-w-[230px] w-full rounded-[5px] h-[60px] flex justify-center items-center'>Get Started</a>
            </div>
            <div className='mt-10'>
                <Image
                    src="/hero/example.png"
                    width={1420}
                    height={929}
                    quality={100}
                    priority
                    alt="Picture of the author"
                />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;