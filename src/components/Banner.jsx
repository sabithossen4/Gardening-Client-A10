import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaInstagram } from "react-icons/fa";
import { Fade, Zoom } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <div className=" mx-auto h-[800px] ">
      <Swiper modules={[Navigation]} navigation loop={true} className="h-full ">

        

         <SwiperSlide >
          <Zoom triggerOnce className="h-full  bg-cover bg-center  bg-[url('/garden-4.jpeg')]">
            <div className=" p-6 rounded-md text-left text-green-900 pl-24 pt-32 ">
              <h2 className="text-6xl font-bold mb-3 ">
                Spring <span className="text-amber-900">Garden</span> Festival
              </h2>
              <p className="mb-4 py-10 text-xl text-white">
                Celebrate the arrival of spring with fellow plant lovers.
                Explore a <br /> variety  of flowers, 
                herbs, and garden setups. Share your gardening <br /> experiences and 
                learn new techniques. 
                This event brings the <br /> whole community together in full bloom.
              </p>
              <button className="">
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative font-bold">Participate</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </button>
            </div>
          </Zoom>
        </SwiperSlide>
        
       

        <SwiperSlide>
          <Zoom triggerOnce className="h-full  bg-cover bg-center  bg-[url('/garden-2.jpg')]">
            <div className=" p-6 rounded-md text-left text-amber-200 pl-24 pt-32 ">
              <h2 className="text-6xl font-bold mb-3">Composting Workshop</h2>
              <p className="mb-4 py-10 text-xl">
                Discover how to turn everyday kitchen waste into rich compost.
                Learn easy and practical composting <br /> methods from experts.
                Improve your garden soil naturally and sustainably. <br />
                This workshop is perfect for beginners and eco-enthusiasts.
              </p>
              <button className="">
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative font-bold">Participate</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>{" "}
              </button>
            </div>
          </Zoom>
        </SwiperSlide>

        <SwiperSlide>
          <Zoom triggerOnce className="h-full  bg-cover bg-center  bg-[url('/garden-1.jpeg')]">
            <div className=" p-6 rounded-md text-left text-amber-200 pl-24 pt-32 ">
              <h2 className="text-6xl font-bold mb-3">
                Balcony Garden Contest
              </h2>
              <p className="mb-4 py-10 text-xl">
                Showcase your creative balcony garden ideas to the world.
                Compete with other urban gardeners <br /> for exciting prizes.
                Get inspired by innovative small-space gardening solutions.{" "}
                <br />
                Turn your balcony into a green escape and gain recognition.
              </p>
              <button className="">
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative font-bold">Participate</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </button>
            </div>
          </Zoom>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
