import React from 'react';
import ProjectTile from './ProjectTile';
import { ProjectsPack, Project } from './projectsData';

const Projects: React.FC = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-5xl m-auto auto-rows-fr">
        {ProjectsPack.map((project: Project) => (
          <ProjectTile
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            onClickMore={project.onClickMore}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
