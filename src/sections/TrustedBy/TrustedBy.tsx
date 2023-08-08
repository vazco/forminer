import React from 'react';

// @ts-expect-error Image import
import campusSkills from '../../images/campus-skills.webp';
// @ts-expect-error Image import
import cbre from '../../images/cbre.webp';
// @ts-expect-error Image import
import eriez from '../../images/eriez.webp';
// @ts-expect-error Image import
import kodefly from '../../images/kodefly.webp';

const companies = [
  {
    src: cbre,
    alt: 'CBRE',
  },
  {
    src: campusSkills,
    alt: 'CampusSkills',
  },
  {
    src: eriez,
    alt: 'Eriez',
  },
  {
    src: kodefly,
    alt: 'Kodefly',
  },
];

export const TrustedBy = () => (
  <div className="trusted-by__container">
    <div className="trusted-by__content">
      <div>Solution trusted by:</div>
      <div className="trusted-by__companies">
        {companies.map(company => (
          <div key={company.src} className="trusted-by__company">
            <img src={company.src} alt={company.alt} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
