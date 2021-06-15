import React from "react";
import Image from 'next/image';

const Info = () => {
  return (
    <>
      <section className={`dark:bg-gray-800 pt-20 wow fadeIn`} id="p-info">
        <div className="container mx-auto px-2 py-8">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-indigo-600  dark:text-gray-100 text-3xl font-bold">
                Welcome, from <span className="italic">Thomas</span> 👍
              </h2>

              <p className="text-gray dark:text-gray-400 lg:max-w-md mt-4 ">
                Here is where I share my tech, hobbies, and thoughts. You&apos;ll
                find me sharing a lot of frontend tech fun and I encourage you
                to check it all out.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2" id="info-img">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <Image
                    className="w-full h-64 object-cover object-center rounded-full shadow-md border-2 border-white"
                    src={profilePic}
                    alt="Picture of Thomas Desmond"
                    id="set-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`


      @media only screen and (max-width: 768px) {

      
        
        #info-img {
          margin-left: 20%
          
        }

        #set-image {
          
            width: 20px;
          
        }

        #info-img {
            margin-bottom: 10px
        }
        
      }
    
    `}
      </style>
    </>
  );
};

export default Info;
