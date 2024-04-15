import { FC } from "react";
import BinarySeparator from "../components/BinarySeparator";
import Hero from "../components/Hero";
import EventsComponent from "../components/EventsComponent";
import AboutInfinity from "../components/AboutInfinity";
// import GalleryComponent from "../components/GalleryComponent";
import JoinUsComponent from "../components/JoinUsComponent";
// import CountDown from "../components/CountDown";

const Home: FC = () => {
  // const targetDate = new Date(2024, 3, 13); // Note: Months are zero-based, so April is represented by 3

  return (
    <div className="my-10 justify-items-center">
      <Hero />

      {/* <BinarySeparator /> */}
{/* <CountDown targetDate={targetDate}/> */}

      <BinarySeparator />
<AboutInfinity/>
      {/* <GenAIComponent /> */}

      <BinarySeparator />

      <EventsComponent/>

      <BinarySeparator />

      {/* <OurFacultyComponent/> */}

      {/* <BinarySeparator /> */}

     {/* <OurTeamComponent/> */}

      {/* <DashDivider /> */}

     {/* <GalleryComponent/> */}

      {/* <DashDivider/> */}

      <JoinUsComponent/>
    </div>
  );
}

export default Home;