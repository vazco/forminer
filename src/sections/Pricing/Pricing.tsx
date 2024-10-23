import clsx from 'clsx';
import React from 'react';

import { SectionLayout } from '../../components/SectionLayout';
import CheckmarkIcon from '../../images/svg/checkmark.svg';

export const Pricing = () => {
  return (
    <SectionLayout heading="Pricing" id="pricing" centerHeading>
      <div className="pricing__description">
        Are you considering leveraging Forminer for your projects?
      </div>
      <div className="pricing__card">
        <div className="pricing__information">
          <div className="pricing__title">CUSTOM</div>
          <div className="pricing__wrapper">
            <div className="pricing__subtitle">
              Personalized solution designed to meet your needs
            </div>
            <p className="pricing__more-info">
              Utilize our ready-made solution to fulfill your project
              requirements, saving both time and budget instead of developing
              something from scratch.
            </p>
            <a
              className={clsx('button', 'pricing__btn', 'button__solid')}
              href="https://www.vazco.eu/contact-us"
              target="_blank"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="pricing__details">
          <span className="pricing__features_title">INCLUDES:</span>
          <ul>
            <li>
              <CheckmarkIcon width={20} height={20} />
              Multi-project licenses
            </li>
            <hr />
            <li>
              <CheckmarkIcon width={20} height={20} />
              Custom extensions
            </li>
            <hr />
            <li>
              <CheckmarkIcon width={20} height={20} />
              Training sessions & consultancy
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};
