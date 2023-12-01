import React from 'react';
import watchIcon from 'assets/svg/watch.svg';
import { useParams } from 'react-router-dom';
import { ProjectsPack } from './projectsData';

const ProjectDetails: React.FC<ProjectDetailsProps> = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = ProjectsPack.find((p) => p.onClickMore === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex justify-center items-center m-auto ">
      <img
        src={project.image}
        alt="Project screenshot"
        className="w-96 rounded-lg"
      />
      <div className="px-6 flex flex-col">
        <h1 className="text-white font-bold text-3xl">{project.title}</h1>
        <h2 className="text-white py-5 text-base font-light">
          {project.subtitle}
        </h2>
        <p className="text-white ">{project.description}</p>
        <p className="text-white ">{project.overview}</p>
        <p className="text-white ">{project.studyCase}</p>
        <p className="text-white ">{project.onClickGithub}</p>
        <p className="text-white ">{project.onClickLive}</p>

        <a
          href={project.onClickLive}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mt-6 "
        >
          <button className="bg-yellow rounded-lg px-12 py-3 text-dark-blue text-base font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-none hover:bg-yellow-dark">
            <img src={watchIcon} alt="Github logo" className="h-4 w-auto " />
            Live link
          </button>
        </a>
        <a
          href={project.onClickLive}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mt-6 "
        >
          <button className="bg-yellow rounded-lg px-12 py-3 text-dark-blue text-base font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-none hover:bg-yellow-dark">
            <img src={watchIcon} alt="Github logo" className="h-4 w-auto " />
            Live link
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectDetails;
