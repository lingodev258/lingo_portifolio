import React from "react";
import Image from "next/image";
import { Links } from "@/data/Quick_links";
const hero = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="w-[800px] h-16 bg-white/5 rounded-[10px] outline-[1.50px] outline-blue-400 backdrop-blur-[250px] mt-6 flex justify-between  px-5">
        <div className="w-30  relative">
          <Image src="/assets/images/lingo.svg" alt="lingo logo" fill />
        </div>
        <ul className="inline-flex justify-start items-center gap-12">
          {Links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-3.5 py-1.5 rounded-md inline-flex justify-center items-center gap-2.5 
             text-white text-[1.1rem] font-light leading-none transition-all duration-300 ease-in-out 
             hover:bg-gradient-to-l hover:from-blue-400/10 hover:via-blue-500/10 hover:to-blue-600/10 
              hover:outline-1 hover:outline-offset-[-1px] hover:outline-sky-800
             hover:scale-105 hover:shadow-lg active:scale-95"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </nav>
  );
};

export default hero;
