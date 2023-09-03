import background from '../assets/images/background.png';
import logoIcon from '../assets/images/logo_28.jpg';

const BackgroundImage = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat bg-center h-[50vh]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pt-20">
        <img
          src={logoIcon}
          alt="mastercraft icon"
          className=" w-14 z-20 right-0 left-0 mx-auto rounded-full"
        />
        <h1 className="mt-10 text-lg md:text-2xl text-light-green tracking-widest text-center">
          THE MOUNTAINS ARE CALLING AND I MUST GO
        </h1>
      </div>
    </div>
  );
};

export default BackgroundImage;
