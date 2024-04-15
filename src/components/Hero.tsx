import { FC } from "react";
import logobg from "../assets/events/logo-bg.png";
import { CalendarIcon } from "@radix-ui/react-icons";
import { SpotLight } from "./ui/SpotLight";

const Hero: FC = () => {
  return (
    <div className="flex flex-1 my-10 lg:flex-row h-[60vh] lg:h-[70vh] align-middle justify-center">
      <SpotLight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <main className="text-4xl lg:text-4xl font-bold">
        <h3 className="inline">Department of</h3>
        <br />
        <h1 className="inline">
          <span className="inline bg-gradient-to-r from-[#dde65e] via-[#dde65e] to-[#dde65e] text-transparent bg-clip-text">
            Computer Science & Engineering
          </span>{" "}
        </h1>{" "}
        {/* Center the image here */}
        {/* <div className="text-2xl lg:text-3xl font-semibold items-center justify-center mb-4 mt-3">
          <p>Agni College Of Technology</p>
        </div> */}
        <main className="text-3xl font-bold">Presents</main>
        <br />
        <div className="text-2xl lg:text-4xl font-semibold items-center justify-center">
          <p> NATIONAL LEVEL TECHNICAL SYMPOSIUM</p>
        </div>
        {/* Make changes here */}
        <div className="flex flex-row items-center justify-center">
          {/* Container for the InfinityLogoWhite image */}
          <div className="w-1/3 -mx-5">
            <img
              src={logobg}
              className="object-contain h- max-h-[50vh]"
              alt="Technox Logo White"
            />
          </div>
          {/* Container for the INFINITY 2K24 text */}
          <div className="flex flex-col items-center justify-center">
            {/* <div className="text-4xl font-sans font-extrabold lg:text-8xl mt-3">
              TECHNOX
              <br />
              2K24
            </div> */}
            
          </div>
        </div>
        <div className="flex flex-row lg:items-center justify-center mt-1 items-end">
          <CalendarIcon className="w-12 h-12 lg:w-16 lg:h-16 mr-4 lg:mr-6" />
          <p className="text-lg lg:text-3xl">
            13<sup>th</sup> April - 24
          </p>
        </div>
      </main>
    </div>
  );
}

export default Hero;