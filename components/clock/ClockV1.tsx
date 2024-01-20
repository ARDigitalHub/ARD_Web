import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const opacity=" opacity-20 "
const transition=" hover:animate-tooltip_show  ";
const gradient=" bg-gradient-to-br from-pink-900 from-0% via-pink-1200 from-5% to-black-800 to-15% ";
const border=" border-none border-2 border-pink-900 hover:border-solid rounded-lg  shadow-xl ";
const size=" sm:w-36 lg:w-56 sm:h-24 lg:h-24 ";
const align=" flex ";
const Time = dynamic(() => import("./Time"), { ssr: false });
type Props = {
  time: number;
};
const ClockV1 = ({ time: initial }: Props) => {
  const [time , setTime]=useState(new Date(initial));
  useEffect(() => {
    const timer=setInterval (() => {
      console.log(time);
      setTime(new Date());
    },6000);

    return ()=>clearInterval(timer);
  });

  return (
    <div className={opacity+size+gradient+border+transition+align}>
      <Time time={time} />
    </div>
  );
};

export default ClockV1;
