import React from 'react';

import GithubIcon from '../../images/svg/github.svg';
import LinkedinIcon from '../../images/svg/linkedin.svg';
import QuoteIcon from '../../images/svg/quote.svg';

export type TestimonialData = {
  company: string;
  description: JSX.Element;
  position: string;
  who: string;
  avatar: string;
  linkGithub: string;
  linkLinkedin: string;
};

type TestimonialProps = TestimonialData;

export const Testimonial = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  const {
    who,
    avatar,
    position,
    company,
    linkGithub,
    linkLinkedin,
    description,
  } = testimonial;

  return (
    <div className="testimonial">
      <div className="testimonial__avatar-container">
        <div className="testimonial__quote-icon">
          <QuoteIcon />
        </div>
        <img src={avatar} alt={who} className="testimonial__avatar" />
      </div>
      <p className="testimonial__who">{who}</p>
      <p>
        {position} at <b>{company}</b>
      </p>
      <div className="testimonial__icons-container">
        <a
          className="testimonial__icon-container"
          href={linkGithub}
          target="_blank"
        >
          <GithubIcon to={linkGithub} />
        </a>
        <a
          className="testimonial__icon-container"
          href={linkLinkedin}
          target="_blank"
        >
          <LinkedinIcon to={linkLinkedin} />
        </a>
      </div>
      <p className="testimonial__description">{description}</p>
    </div>
  );
};
