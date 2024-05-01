"use client"
import { useEffect, useState } from "react";

import Image from "next/image";
import NAV from "./components/nav";
import BNAV from "./components/bottomNav";
import RNAV from "./components/rightNav";
import LNAV from "./components/lefNav";
import MONITOR from "./components/monitor";

export default function Home() {

  const [sdata, setSdata] = useState([{}])

  useEffect(() => {
    const intervalId = window.setInterval(() => {

      fetch("http://127.0.0.1:5000/data")
      .then(res => res.json())
      .then(data => {
        setSdata(data)
        // console.log(data.LEITURAS_ARDUINO.CORRENTE)
      })
    }, 1000);
    return () => window.clearInterval(intervalId)
}, [sdata, setSdata])

  return (    
    <>
    {
    (typeof sdata["LEITURAS_ARDUINO"] === "undefined") ? (
      // the load screen goes here
      <>
      <div className="flex justify-around w-screen h-screen text-center animate-pulse animate-infinite animate-duration-1000 animate-ease-linear">
        <div className="self-center text-8xl">PTATS</div>
      </div>
      </>
    ): (
      <>
      <div className="flex flex-col relative h-screen font-bold">
        <NAV data={sdata}/>
        <div className="flex flex-row bg-slate-200 h-full w-full justify-between">
          <div className="bg-green-100 w-[227px]">
            <LNAV data={sdata}/>
          </div>
          <div className="bg-red-400 w-full">
            <MONITOR data={sdata}/>
          </div>
          <div className="bg-blue-300 w-[87px]">
            <RNAV data={sdata}/>
          </div>
        </div>
        <div className="bg-darkui h-24">
          <BNAV data={sdata}/>
        </div>
      </div>
    </>

    )
      }
    
    </>

   );
}
