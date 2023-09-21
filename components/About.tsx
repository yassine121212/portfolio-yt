import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="uppercase tracking-[20px] text-gray-500 text-2xl text-center translate-y-12 ml-8 md:ml-0 md:translate-y-0"
      >
        About
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col items-center px-10 mx-auto mt-16 text-center md:mt-0 md:text-left md:flex-row max-w-7xl justify-evenly"
      >
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={urlFor(pageInfo.profilePic)}
          className=" flex-shrink-0 w-44 h-44 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
        ></motion.img>

        <motion.div
          initial={{
            x: 200,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="px-0 mt-4 space-y-5 md:mt-8 lg:mt-12 md:px-10"
        >
          <h4 className="w-screen md:w-full text-2xl text-center font-semibold bg-[#F7AB0A] md:text-2xl lg:text-4xl">
            Here is a{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              little
            </span>{" "}
            background
          </h4>
          <p className="px-12 lg:text-lg">
            {pageInfo?.backgroundInformation}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;
