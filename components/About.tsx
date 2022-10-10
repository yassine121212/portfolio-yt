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
        className="uppercase tracking-[20px] text-gray-500 text-2xl text-center"
      >
        About
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
      >
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className=" mt-24 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
        ></motion.img>

        <motion.div
          initial={{
            x: 200,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10 px-0 mt-12 md:px-10"
        >
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
            background
          </h4>
          <p className="text-lg">{pageInfo?.backgroundInformation}</p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;
