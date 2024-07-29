"use client";

import React from "react";
import { useTypewriter } from 'react-simple-typewriter';
import Image from "next/image";
import Background from "./Background";





function Hero(){
    const [text] = useTypewriter({
        words: [' Skills', 'Generations', 'Motivation', 'Lifestyle'],
        loop: true,
        delaySpeed: 2000,
      })

    return(
      <>
            <div className="h-screen flex flex-col  items-center justify-center text-center overflow-hidden" >
                <Background/>
                <div>
                <Image src="/images/bluehigh.png" alt="Description of the image" width={100} height={100} />
                </div>
            <h1 className="text-black  font-bold   " >
            <span  >
                <h1 className="text-black font-bold " >
                    Inheriting
                </h1>
              {text}
            </span>
          </h1>
            </div>
            
            </>
    )
}

export default Hero;