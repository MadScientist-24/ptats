"use client"
import Image from "next/image";
import NAV from "./components/nav";
import BNAV from "./components/bottomNav";
import RNAV from "./components/rightNav";
import LNAV from "./components/lefNav";
import MONITOR from "./components/monitor";

export default function Home() {
  return (

    <div className="flex flex-col relative h-screen">
      <NAV></NAV>
      <div className="flex flex-row bg-slate-200 h-full w-full justify-between">
        <div className="bg-green-100 w-[227px]">
          <LNAV/>
        </div>
        <div className="bg-red-400 w-full">
          <MONITOR/>
        </div>
        <div className="bg-blue-300 w-[87px]">
          <RNAV/>
        </div>
      </div>
      <div className="bg-darkui h-24">
        <BNAV/>
      </div>
    </div>
   );
}
