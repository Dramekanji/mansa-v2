import Link from "next/link";
import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] text-center">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
