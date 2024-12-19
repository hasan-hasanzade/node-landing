import React from 'react';
import SetupIcon from '@public/features/comp.svg'
import ManageIcon from '@public/features/docs.svg'
import SecureIcon from '@public/features/pass.svg'
import FastIcon from '@public/features/fast.svg'
import RealIcon from '@public/features/real.svg'


const Features: React.FC = () => {
  return (
    <section>
      <div className='container max-w-[1430px] mt-24'>
          <div className='text-center mt-[-330px]'>
            <h2 className="font-inter bg-gradient-to-r from-white  to-white/25 inline-block text-transparent bg-clip-text text-5xl">
                Features
            </h2>
            <p className='mt-5 font-inter text-white text-lg'>The main features of the service, thanks to you there <br /> will be no doubt in choosing us</p>
          </div>
          <div>
            <div>
                <div className='w-[90px] h-[90px] bg-foreground rounded-[15px] flex justify-center items-center shadow-[inset_1.1778208017349243px_1.1778208017349243px_2px_0px_rgba(237,250,255,0.06)] shadow-[inset_-1px_-1px_2px_0px_rgba(255,255,255,0.50)]'><div className=''><SetupIcon className=''/></div></div>
                <h3>Effortless Node Setup</h3>
                <p>Deploy any blockchain node from our catalog with minimal effort and maximum efficiency</p>
            </div>
            <div>
                <ManageIcon/>
                <h3>Seamless Management</h3>
                <p>All your nodes in one dashboard, designed for ease of use and reliability</p>
            </div>
            <div>
                <SecureIcon />
                <h3>Secure & Scalable</h3>
                <p>Robust infrastructure to keep your nodes safe and ready to scale as you grow</p>
            </div>
            <div>
                <FastIcon />
                <h3>Fast Deployment</h3>
                <p>Get your nodes up and running within minutes, no technical skills required</p>
            </div>
            <div>
                <RealIcon />
                <h3>Real-Time Monitoring</h3>
                <p>Stay connected with real-time updates on node performance and status</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Features;