import React from "react";
import { Experience } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";


import { motion } from "framer-motion";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({
  experiences,
}: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="uppercase tracking-[20px] text-gray-500 text-2xl text-center  "
      >
        <h3 className="uppercase tracking-[10px] md:tracking-[15px] lg:tracking-[20px] text-gray-500 text-2xl pt-20 ">
          Experiences
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm  ">
          hover over an area of expertise
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex   relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]  xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center  "
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
             <div
                className="parent"
                key={experiences[0].company}
              >
            <div className="card">
                <span className="absolute py-1 px-2  bg-[#D29615] rounded-full top-2 left-2 !z-99 font-bold">5 months</span>
              
              <div className="!bg-red-700 content-box">
                <span className="card-title">
                  Company :{" "}
                  {experiences[0].company}
                </span>
                <p className="card-content ">
                  Job Title :{" "}
                  {experiences[0].jobTitle}
                </p>
                <span className="see-more !text-red-900 ">
                  <span className="font-bold text-[12px]">
                    {" "}
                    Job Description :{" "}
                  </span>
                  Implement the corresponding web
                  application to manage data
                  statistics and customer
                  management.
                </span>
              </div>
 
              <div className="w-20 h-20 date-box md:w-24 md:h-24 lg:w-16 lg:h-16 ">
                
                <Image
                  src={urlFor(
                    experiences[0].companyImage
                  ).url()}
                  alt="Vitsey"
                  className="object-cover rounded-full ring-red-900 ring-2 "
                  layout="fill"
                />
                
              </div>
        
            </div>
          </div>{" "}
          <div
            className="parent"
            key={experiences[1].company}
          >
            <div className="card">
                              <span className="absolute py-1 px-2  bg-[#D29615] rounded-full top-2 left-2 !z-99 font-bold">2 months</span>

              <div className="!bg-blue-700 content-box">
                <span className="card-title ">
                  Company :{" "}
                  {experiences[1].company}
                </span>
                <p className="card-content">
                  Job Title :{" "}
                  {experiences[1].jobTitle}
                </p>
                <span className="see-more !text-blue-900 ">
                  <span className="font-bold text-[12px]">
                    {" "}
                    Job Description :{" "}
                  </span>
                  Implement the corresponding web
                  application to manage data
                  statistics and customer
                  management.
                </span>
              </div>
 
              <div className="w-20 h-20 date-box md:w-24 md:h-24 lg:w-16 lg:h-16">
                
                <Image
                  src={urlFor(
                    experiences[1].companyImage
                  ).url()}
                  alt="Vitsey"
                  className="object-cover rounded-full "
                  layout="fill"
                />
              </div>
        
            </div>
          </div>{" "}
        </div>
      </motion.div>
    </>
  );
};

export default WorkExperience;
