import { logobg } from "../assets/events/eventsImages";


function AboutInfinity(): JSX.Element {
  return (
    <div className="py-10 my-10 h-auto items">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              ABOUT{" "}
              <span className="inline bg-gradient-to-r from-[#88f27a]  to-[#6aff00] text-transparent bg-clip-text">
                TECHNOX
              </span>
            </p>
          </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row max-w-[900px]">
        <div className="flex w-full lg:w-1/2 lg:order-2 items-center justify-center">
          <img src={logobg} alt="Infinity Event" className="w-2/3 lg:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="lg:w-1/2 lg:order-1">
          <p className="text-md lg:text-md text-center leading-relaxed">
          We are excited to invite you all to the Agni College of Technology's Symposium, "Technox 2K24," which is being held on April 13th and is being organized by Computer Science & Engineering (CSE). Our goal is to foster a culture of innovation, teamwork, and knowledge sharing. Our goal is to explore new trends, share priceless knowledge, and address the most important issues facing our sector. Let's light the path ahead together and spark advancement and positive change. Please take advantage of this opportunity to interact with other enthusiasts who are as passionate and dedicated as you are. We are confident that "Technox 2K24" will be an inspiring and enlightening event. Come along and experience this thrilling path of learning and growth with us!          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfinity;