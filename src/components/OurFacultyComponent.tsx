import React from 'react'
// import SudhaMam from '../assets/SudhaMam.jpeg'
// import GovardhanaSir from '../assets/GovardhanaSir.jpeg'

interface FacultyMember {
  imageUrl: string;
  name: string;
  description: string;
}

const OurFacultyComponent: React.FC = () => {
  const faculty: FacultyMember[] = [
    {
      imageUrl: "",
      name: 'Professor  Balaji Madhavan, Head of the Department',
      description:""
    },
    {
      imageUrl: "",
      name: 'Principal Srivansan Alavandar',
      description:""
    },
    {
      imageUrl: "",
      name: 'Dr.Sujatha ',
      description:""
    },
   
  ];

  return (
    <div className="py-10 my-10 h-auto items">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          OUR ELITE{' '}
          <span className="inline bg-gradient-to-r from-[#7fbaf4]  to-[#6d00fc] text-transparent bg-clip-text">
            FACULTY
          </span>
        </p>
      </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row max-w-[1000px]">
        {faculty.map((member, index) => (
          <div key={index} className="flex flex-col items-center lg:w-1/2 lg:order-2 mt-4">
            <img src={member.imageUrl} alt={member.name} className="w-2/3 lg:w-2/3 mx-auto" />
            <div className="lg:w-2/3 mt-6">
              <h3 className="text-2xl font-semibold text-white text-center lg:text-center">{member.name}</h3>
              <p className="mt-2 text-white text-center lg:text-center">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFacultyComponent