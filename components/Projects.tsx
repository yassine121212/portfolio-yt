import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative mt-8  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col lg:-space-y-[5cm] gap-11 md:gap-0 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="flex-1 object-cover object-center w-full "
            />

            <div className="max-w-6xl px-0 space-y-10 -translate-y-24 md:px-10">
              <h4 className="text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of{" "}
                  {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map(
                  (technology) => (
                    <img
                      className="w-10 h-10"
                      key={technology._id}
                      src={urlFor(
                        technology.image
                      ).url()}
                      alt=""
                    />
                  )
                )}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
