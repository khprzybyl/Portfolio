import React from 'react';
import arrowIcons from 'assets/svg/arrow-north-east.svg';
import { useParams } from 'react-router-dom';
import { ProjectsPack } from './projectsData';

const ProjectDetails: React.FC<ProjectDetailsProps> = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = ProjectsPack.find((p) => p.onClickMore === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleLiveClick = () => {
    window.open(project.onClickLive, '_blank'); // Open in new tab for external links
  };

  // const handleGithubClick = () => {
  //   window.open(project.onClickGithub, '_blank'); // Assuming onClickGithub is an external link
  // };

  const toolsPack = project.tools;

  return (
    <div className="my-10 mx-32">
      <h1 className="text-white font-bold text-7xl">{project.title}</h1>
      <h2 className="text-white pt-4 pb-6 text-base font-bold text-3xl">
        {project.subtitle}
      </h2>
      <div className="flex flex items-center justify-between max-w-2xl mb-24">
        <div className="flex flex-col">
          <div className="flex gap-1 pt-8">
            {toolsPack.map((tool, index) => (
              <div
                key={index}
                className="px-3 py-1 rounded-sm bg-dark-blue flex border-1 border"
              >
                <p className="text-white">{tool}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleLiveClick}
              className="flex bg-yellow rounded-lg w-48 pl-5 py-3 text-dark-blue text-base font-bold items-center justify-center gap-3 shadow-lg hover:shadow-none hover:bg-yellow-dark"
            >
              See result
              <img src={arrowIcons} alt="Github logo" className="h-6 w-auto" />
            </button>

            {/* <button
              onClick={handleGithubClick}
              className="flex bg-yellow rounded-lg w-48 pl-5 py-3 text-dark-blue text-base font-bold items-center justify-center gap-3 shadow-lg hover:shadow-none hover:bg-yellow-dark"
            >
              {' '}
              See code
              <img src={arrowIcons} alt="Github logo" className="h-6 w-auto" />
            </button> */}
          </div>
          <h2 className="text-white pt-8 pb-2 text-base font-bold">
            Challenge
          </h2>
          <p className="text-white leading-5">{project.challenge}</p>
          <div className="flex divider divide-x-2 divide-white my-8">
            <div className="mr-6">
              <h2 className="text-white py-2 text-base font-bold">For</h2>
              <p className="text-white leading-5">{project.purpose}</p>
            </div>
            <div>
              <h2 className="text-white py-2 text-base font-bold ml-6">
                Main Assumptions
              </h2>
              <p className="text-white leading-5 ml-6">
                {project.mainAssumptions}
              </p>
            </div>
          </div>
        </div>
        <img
          src={project.imageBackground}
          alt="Background"
          className="w-96 rounded-lg absolute -bottom-10 right-56 invisible xl:visible"
        />
      </div>
      <div>
        <div>
          <h2 className="text-white py-2 text-base font-bold">Overview</h2>
          <p className="text-white mb-6">{project.overview}</p>
        </div>
        <img
          src={project.imageTwo}
          alt="Project screenshot"
          className=" rounded-lg"
        />
      </div>
    </div>
  );
};
export default ProjectDetails;
