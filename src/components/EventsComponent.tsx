import { FC } from 'react';
import BorderMagicButton from './ui/BorderMagicButton';
import { NavLink } from 'react-router-dom';

const EventsComponent: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="h-[0rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="mb-15"> {/* Adjust the margin top to add space */}
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Uncover exciting Events...
          </p>
                        <NavLink
                to="/events"
                className={({ isActive }): string =>
                  `${isActive ? "text-yellow-200" : ""} nav-link`
                }
              >
               <BorderMagicButton text='Events' />
              </NavLink>
            
          {/* <a href="/events">
            <BorderMagicButton text="Know More"/>
          </a> */}
        </div>
        {/* <div className="mt-20"> {/* Adjust the margin top to add space */}
          {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
            {/* Explore our stellar Sponsors! */}
          {/* </p> */}
          {/* <a href="/sponsors">
            <BorderMagicButton text="Sponsors"/>
          </a> */}
        {/* </div> */} 
      </div>
    </div>
  );
}

export default EventsComponent;
