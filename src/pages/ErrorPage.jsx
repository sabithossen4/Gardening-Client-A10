import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen  bg-cover bg-center  bg-[url('/error5.jpg')] flex flex-row justify-center items-center">
            <div className=" mb-60 text-center text-black">
              <div className="mb-20 bg-white rounded-2xl p-10 shadow-2xl">
                <h2 className="text-6xl font-bold ">Error 404 </h2>
              <p className="py-4 text-xl font-bold">
               Not Found
              </p>
              </div>
              <Link to={'/'}>
              <button className="">
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative font-bold">Go Home</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>{" "}
              </button>
              </Link>
            </div>
          </div>
  );
};

export default ErrorPage;
