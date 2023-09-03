import React from 'react';
import ProductBox from './ProductBox.jsx';

const SectionBox = ({ title, content, products }) => {
  console.log('products:', products);

  return (
    <div className="bg-light-green bg-opacity-90 relative z-10 rounded-lg mt-10 pt-10 pb-16 px-0 mx-0 sm:mx-5 sm:px-8 lg:mx-20 xl:mx-60 flex-col flex justify-center items-center text-center ">
      <h2 className="font-bold px-5 text-lg ">{title}</h2>
      <div className="my-5 w-[100%] rounded-lg px-5">
        <p>{content}</p>
      </div>
      <div className="m-auto flex flex-col justify-center gap-8 lg:flex-row ">
        {products.map((product) => {
          console.log('onClickLink:', product.onClickLink);
          return (
            <ProductBox
              key={product.title} // Use index as the key
              title={product.title}
              content={product.content}
              description={product.description}
              image={product.image}
              onClickLink={product.onClickLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionBox;
