import { GetStaticProps } from "next";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import {
  PageInfo,
  Project,
  Skill,
  Social,
  Experience,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";

import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experiences: Experience[];
};

const Home = ({
  projects,
  skills,
  pageInfo,
  socials,
  experiences,
}: Props) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Header socials={socials} />

      {/* Hero Banner Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* {/* Experience Section  */}
      <section
        id="experience"
        className=" snap-start"
      >
     
        <WorkExperience
          experiences={experiences}
        />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className=" snap-start"
      >
        <Skills skills={skills} />
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section> */}
  <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
               src="https://cdn.sanity.io/images/4kgaeg22/production/8dd959d7597c41d6aed750dbbffc69646b98bd38-200x200.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
      {/* Contact Me Section */}
      <section id="contact" className="min-h-screen lg:min-h-min snap-end">
        <ContactMe />
      </section>

    
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();
    const experiences: Experience[] = await fetchExperiences();

    return {
      props: {
        pageInfo,
        skills,
        projects,
        socials,
        experiences,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // You can choose to handle the error by providing default data or rethrowing it
    throw error; // Rethrow the error to halt the build process and log the error
  }
};
