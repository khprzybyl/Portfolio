import React from 'react';
import SectionBox from './SectionBox.jsx';
import { sectionDescriptions } from '../types/types.jsx';

const SectionTwo = () => {
  return (
    <div>
      {sectionDescriptions.map((section) => (
        <SectionBox
          key={section.id}
          title={section.title}
          content={section.content}
          products={section.products} // Pass products array
        />
      ))}
    </div>
  );
};

export default SectionTwo;
