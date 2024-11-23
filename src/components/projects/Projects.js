import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="IPL-Win-Predictor"
          des="This project is designed to address key objectives using a combination of advanced technologies and practical approaches. It delivers an effective and user-friendly solution by utilizing contemporary tools and best practices."
          src={projectOne}
          githubLink="https://github.com/"
          websiteLink="https://github.com/"

        />
        <ProjectsCard
          title="Mi-Blog-Van"
          des="This project is designed to address key objectives using a combination of advanced technologies and practical approaches. It delivers an effective and user-friendly solution by utilizing contemporary tools and best practices."
          src={projectTwo}
          githubLink="https://github.com/"
          websiteLink="https://github.com/"
        />
        <ProjectsCard
          title="Secret Sharing Website"
          des="This project is designed to address key objectives using a combination of advanced technologies and practical approaches. It delivers an effective and user-friendly solution by utilizing contemporary tools and best practices."
          src={projectThree}
          githubLink="https://github.com/"
          websiteLink="https://github.com/"
        />
        <ProjectsCard
          title="After School Diaries"
          des="This project is designed to address key objectives using a combination of advanced technologies and practical approaches. It delivers an effective and user-friendly solution by utilizing contemporary tools and best practices."
          src={projectFour}
          githubLink="https://github.com/"
          websiteLink="https://github.com/"
        />
        <ProjectsCard
          title="Weather Website"
          des="This project is designed to address key objectives using a combination of advanced technologies and practical approaches. It delivers an effective and user-friendly solution by utilizing contemporary tools and best practices."
          src={projectFive}
          githubLink="https://github.com/"
          websiteLink="https://github.com/"
        />
      </div>
    </section>
  );
}

export default Projects