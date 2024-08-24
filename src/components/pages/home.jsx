import React from "react";
import video from "../../assets/video.mp4";
import { useMediaQuery } from '@react-hook/media-query'

const HomePage = () => {

  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

  return isDesktop ? (
    <>
      <div id="home" className="w-full min-h-screen flex md:flex-row flex-col pt-20 items-center bg-gradient-to-b from-[#ffffff] to-[#fdd6a1]">

        <div className="aspect-w-12 aspect-h-6 ">
          <video className=" w-full h-full md:opacity-60 relative" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>


        <div className="md:absolute">

          <div className="md:w-1/2 md:pl-8 ">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-6">Expert planning,<span className="text-orange-400"> seamless execution</span></h1>
              <p className="text-lg text-white mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus animi quas, laboriosam perferendis ipsum? Blanditiis vero reiciendis minima autem?
              </p>

              <div className="text-center md:text-left">
                <form className="flex flex-col md:flex-row gap-4">

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    className="px-4 py-2 bg-white rounded-full shadow-lg focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-amber-800 text-white rounded-full shadow-lg hover:bg-amber-900">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
    : (
      <>
        <div id="home" className="mt-[7rem] pb-10 px-4 bg-white ">
          <div>
            <h1 className="text-4xl text-start font-bold text-black mb-3">Trun your
              <br />
              <span className="text-[#a34370]">Dream into Reality</span></h1>

           

            <p className="text-lg text-black mb-2 text-justify">
              Welcome to our real estate agency, where finding your dream home is our top priority. Our team of experienced agents is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a property
            </p>

            <div className="mb-4">
              <video className=" w-full h-full rounded-lg md:opacity-60 relative" autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>

            <div className="mt-7 text-center flex flex-col justify-start items-center gap-4">

              <form className="w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  className="w-full tracking-widest bg-white text-center rounded-full text-lg shadow-lg border border-gray-400 py-2 "
                />
              </form>

              <button className=" w-full py-2 border-gray-500 border bg-amber-800 text-white rounded-3xl shadow-lg text-lg tracking-widest hover:bg-amber-900">
                Get Started
              </button>
            </div>

          </div>
          <div>

          </div>
        </div>
      </>
    );


};

export default HomePage;























