import { FC } from "react";
import BinarySeparator from "../components/BinarySeparator";
import Hero from "../components/Hero";
import EventsComponent from "../components/EventsComponent";

const Home: FC = () => {
  return (
    <div className="my-10 justify-items-center">
      <Hero />

      {/* <BinarySeparator /> */}


      {/* <BinarySeparator /> */}

      {/* <GenAIComponent /> */}

      <BinarySeparator />

      <EventsComponent/>

      <BinarySeparator />

      {/* <OurFacultyComponent/> */}

      <BinarySeparator />

      {/* <OurTeamComponent /> */}

      {/* <DashDivider /> */}

      {/* <GalleryComponent /> */}

      {/* <DashDivider/> */}

      {/* <JoinUsComponent/> */}
    </div>
  );
}

export default Home;