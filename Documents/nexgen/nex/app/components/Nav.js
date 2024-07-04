"use client";

import React from "react";
import { MenuIcon } from '@heroicons/react/outline';
import {Link} from "@nextui-org/link"
import { useState } from "react";

function Nav(){
  const[show, setShow] = useState(false);

  const handlemenu = () => {
    setShow(!show);
  }

    return(
      <>
    <div className="bg-[#333536] p-3 " >      
     <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-3 border-r border-white pr-3">
      <h1 className="  text-white  p-3 " >
        NextGen Athlete
      </h1>
      </div>
      <div className=" flex items-center  space-x-3 lg:hidden " >
        <div className="h-6 w-6 text-white">
        <MenuIcon onClick={handlemenu} />
        </div>
        {show ?  
    <div className=" " >
    <div className="menucard" >
      <div className="flex flex-col items-center h-full overflow-y-scroll "  >
      <Link href="/">
      <div className="p-3" > Home </div> </Link> 
      <div className="p-3"  >About us</div>
      <div className="p-3"  >
        Academic
      </div>
      <Link href="eve">
      <div className="p-3"  >
        Events
      </div>
      </Link>
      <div className="p-3"  >
        Gallery
      </div>
      <div className="p-3"  >
        Testimonials
      </div>
      <div className="p-3"  >
        Career
        </div>
        <Link href="Contact">
        <div className="p-3" >
         Contact
        </div>
        </Link>
      </div>
    </div> </div>: null
       }
      </div>
      <Link href="/">
      <div className="hidden sm:block xl:inline" >
        Home
      </div>
      </Link>
      <Link href="cat2">
      <div className="hidden sm:block xl:inline" >
        About us
      </div>
      </Link>
    
     
      
     
      <Link href="cat5">
      <div className="hidden sm:block xl:inline" >
        Enquire now
      </div>
      </Link>
      <Link href="/Contact">
       <div className="hidden sm:block xl:inline" >
        Contact
       </div>
      </Link>
      </div>
    </div>
   
    </>
    )
}

export default Nav;