import './App.css'
import React, { useState, useEffect } from 'react';

function BSODErrorPage() {
  const [progress, setProgress] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 100; // Reset to create a loop
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-blue-600 text-white font-mono flex flex-col justify-center items-start p-8 md:p-16">
      <div className="max-w-4xl w-full">
        {/* Sad Face */}
        <div className="text-8xl md:text-9xl mb-8">:(</div>
        
        {/* Main Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-light mb-6">
            Your website ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.
          </h1>
          
          <div className="text-lg md:text-xl mb-4">
            <span className="text-white">{progress}% complete</span>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-8 text-sm md:text-base">
          <p className="mb-4 flex flex-row">
            Error Page provided by Cloudfare 
            {<img className='w-[60px] ml-[10px] mb-[5px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/2560px-Cloudflare_Logo.svg.png' alt='cloudfare'></img>}
            {/* <span className="text-blue-200"> https://support.yourwebsite.com</span> */}
          </p>
          
          
          {/* <p className="mb-6">
            If you call a support person, give them this info:
          </p> */}
          
          <div className="bg-blue-700 p-4 mb-4">
            <p className="mb-2">Stop code: HOME_PAGE_BACKEND_SERVER_CONNECTION_FAILURE</p>
            <p>What failed: INDEX.JSX</p>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="flex items-start space-x-6">
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white"></div>
            <p className="text-xs mt-2 max-w-24">
              For more information about this issue and possible fixes
            </p>
          </div>
          
          <div className="flex-1">
            <div className="text-xs md:text-sm space-y-1 text-blue-200">
              <p>*** STOP: 0x0000007E (0xFFFFFFFFC0000005, 0xFFFFF80002E43C43, 0xFFFFFA800348A308, 0xFFFFFA800348AB60)</p>
              <p>*** FRONTEND_BACKEND_COMMUNICATION.SYS - Address FFFFF80002E43C43 base at FFFFF80002E40000, DateStamp 4ce79930</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {

  return (
      <BSODErrorPage/>
  )
}

export default App
