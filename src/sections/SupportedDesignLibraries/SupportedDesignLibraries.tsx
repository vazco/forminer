import React from 'react';

// @ts-expect-error png import
import antDesignIcon from '../../images/technologies/ant-design.webp';
// @ts-expect-error png import
import bootstrapIcon from '../../images/technologies/bt.webp';
// @ts-expect-error png import
import materialIcon from '../../images/technologies/material-ui.webp';
// @ts-expect-error png import
import semanticIcon from '../../images/technologies/semanticUI.webp';

const items = [
  {
    src: semanticIcon,
    alt: 'semanticUI icon',
  },
  {
    src: antDesignIcon,
    alt: 'antDesign icon',
  },
  {
    src: materialIcon,
    alt: 'MUI icon',
  },
  {
    src: bootstrapIcon,
    alt: 'bootstrap icon',
  },
];

export const SupportedDesignLibraries = () => {
  return (
    <div className="supported-design-libraries__container">
      {items.map(({ src, alt }) => {
        return <img key={src} loading="lazy" src={src} alt={alt} />;
      })}
    </div>
  );
};
