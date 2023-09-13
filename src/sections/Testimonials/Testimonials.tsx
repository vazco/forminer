import React from 'react';

import { SectionLayout } from '../../components/SectionLayout';
// eslint-disable-next-line no-unused-vars -- Type import
import { Testimonial, TestimonialData } from '../../components/Testimonial';
// @ts-expect-error Image import
import avatarViktorSabatier from '../../images/testimonials/viktor-sabatier.webp';

const testimonials: TestimonialData[] = [
  {
    company: 'Campus Skills',
    description: (
      <>
        &quot;As a CTO finding the right tool is always a challenge. Regarding
        form builders, I have spent hours looking for and testing solutions from
        free open source to paid ones. Forminer is the way to go - it is so easy
        to integrate, and because you have access to the code, you can easily
        build custom components that fit your business needs.&quot;
      </>
    ),
    position: 'Founder & CTO',
    who: 'Viktor Sabatier',
    avatar: avatarViktorSabatier,
    linkGithub: 'https://github.com/sabativi',
    linkLinkedin: 'https://www.linkedin.com/in/sabativi/',
  },
];

export const Testimonials = () => {
  return (
    <SectionLayout heading="Testimonials" id="testimonials" centerHeading>
      <div className="testimonials">
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial.who} testimonial={testimonial} />
        ))}
      </div>
    </SectionLayout>
  );
};
