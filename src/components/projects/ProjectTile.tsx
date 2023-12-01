import React from 'react';
import watchIcon from 'assets/svg/watch.svg';
import { useNavigate } from 'react-router-dom';

interface ProjectTileProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  onClickMore: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  subtitle,
  description,
  image,
  onClickMore,
}) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/projects/${onClickMore}`);
    console.log('open page with details for', onClickMore);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg  hover:scale-105 duration-300">
      <div className="m-6">
        <h1 className="text-dark-blue font-bold text-2xl">{title}</h1>
        <h2 className="text-dark-blue py-5 text-base font-light">{subtitle}</h2>
        <p className="text-dark-blue ">{description}</p>
      </div>
      <button
        onClick={handleSeeDetails}
        className="mx-6 mb-3 bg-yellow rounded-lg px-12 py-3 text-dark-blue text-base font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-none hover:bg-yellow-dark flex-grow"
      >
        <img src={watchIcon} alt="Details Link" className="h-4 w-auto" />
        Read more details
      </button>
      <img
        src={image}
        alt="Project screenshot"
        className="w-full rounded-b-lg max-w-md"
      />
    </div>
  );
};
export default ProjectTile;
