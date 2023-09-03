import React from 'react';

// eslint-disable-next-line react/prop-types
const ProductBox = ({ title, content, description, image, onClickLink }) => {
  const handleButtonClick = () => {
    console.log('onClickLink:', onClickLink);
    window.open(onClickLink, onClickLink);
  };
  return (
    <div className="mt-6 py-8 px-5 border border-dark-green rounded-lg text-sm max-w-md flex flex-col justify-center">
      <div className="flex flex-col">
        <h3 className="font-bold text-sm mb-1">{title}</h3>
        <h4 className="text-md text-teal-500">{description}</h4>
      </div>
      <p className="text-xs text-dark-green leading-6 mt-5">{content}</p>
      <img src={image} alt="portret" className="" />
      <button
        type="button"
        className="inline-flex text-light-green bg-dark-green justify-center rounded-full mt-6  px-4 py-4 text-sm font-medium hover:bg-gray-dark-green focus:outline-none w-full "
        onClick={handleButtonClick}
      >
        Przejdź do aukcji na Allegro
      </button>
    </div>
  );
};
export default ProductBox;
