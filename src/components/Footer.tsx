import { FC } from 'react';

import '../stylesheets/FooterBorder.css';
import InstagramLogoWhite from '../assets/InstagramLogoWhite.png';
import { email, logobg } from '../assets/events/eventsImages';

const Footer: FC = () => {
  return (
    <>
      <div className="FooterBorder1">
        <div className="FooterBorder2">
          <div className="FooterBorder3">
            <div className="FooterBorder4">
            </div>

            <div className="text-white">
              <div className="mb-4 flex align-middle justify-center">
                {/* Logo */}
                <img src={logobg} alt="Logo" className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 justify-center" />
              </div>
              {/* Name */}
              <div className="text-xl font-bold mb-2 pb-5">&copy; TECHNOX 2K24</div>
              {/* Additional Text */}
              <p className="text-gray-400">Department of Computer Science & Engineering</p>
              <p className='text-gray-400'> Agni College Of Technology.</p>
            </div>
         
              <div className="text-white lg:flex lg:flex-row flex-col lg:justify-center lg:items-center pr-10 lg:justify-around">
                <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 space-x-4 mt-4 lg:mt-0">
                  {/* <div className="text-xl font-bold">Reach us: <p className='text-xl font-light'>infinity2k24.oucse@gmail.com</p></div> */}
                  <div className="text-2xl font-bold text-yellow-200 ml-3 ">CONTACT US</div>

                  <div className="text-xl font-bold">CONVENOR:</div>

                  <div className="text-xl font-light mb-2 pb-2">Dr.Balaji Madhavan</div>

                  <div className="text-xl font-bold">FACULTY COORDINATOR:</div>
                  <div className="text-xl font-light mb-2 pb-2">Mrs.M.P.Sujatha</div>

                  <div className="text-xl font-bold">STUDENT COORDINATORS:</div>
                  <div className="text-xl font-light">W. karunakaran : 9840620303</div>
                  <div className="text-xl font-light mb-2 pb-2">V. vignesh : 9003388928</div>
                 
                </div>
                  <div className="text-xl font-bold">FOLLOW US:</div>
                  <div className='flex flex-row gap-4 justify-center align-middle'>
                    <div>
                      <a href="https://www.instagram.com/technox_24?igsh=ZDI2cnY0eTRmMDA4" className="text-gray-400 opacity-50 hover:opacity-100">
                        <img src={InstagramLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="Instagram Logo" />
                      </a>
                    </div>
                    <div>
                      <a href="mailto:technoxcse@gmail.com" className="text-gray-400 opacity-50 hover:opacity-100">
                        <img src={email} className="h-8 w-8 sm:h-6 sm:w-6" alt="LinkedIn Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="text-gray-300 text-center">&copy; Powered & Secured by CSE Dept.</div>
                  <div className="text-gray-300 text-right text-sm"> Developed by Balamanikandan & Gowtham</div>

                </div>
              </div>
            </div>

          </div>
        </div>
      
    </>
  );
}

export default Footer;