import React from 'react';

import { CardGrid } from '../../components/CardGrid';
import { SectionLayout } from '../../components/SectionLayout';
import AnalyzeIcon from '../../images/svg/analyze.svg';
import DndIcon from '../../images/svg/drag-and-drop.svg';
import ExtandableIcon from '../../images/svg/extandable.svg';
import FormIsDataIcon from '../../images/svg/form-is-data.svg';
import ValidationIcon from '../../images/svg/validation.svg';
import WysiwygIcon from '../../images/svg/wysiwyg.svg';

const cards = [
  {
    icon: <DndIcon />,
    title: 'Intuitive Drag & Drop Interface',
    description:
      'Build custom forms by arranging the components as you prefer.',
  },
  {
    icon: <ValidationIcon />,
    title: 'Conditional Fields & Validation',
    description: `Make your forms dynamic. Set arbitrary conditions based on various user choices and save time on
      making separate form variations by including all conditions in one form.`,
  },
  {
    icon: <ExtandableIcon />,
    title: 'Extendable with custom fields',
    description: `Build any-kind field you need in your project, even the most unusual ones.
      Forminer gives you full customizability.`,
  },
  {
    icon: <FormIsDataIcon />,
    title: '“Form is data”',
    description: `The schema-first approach offers multiple advantages. Enable yourself to make programmatic changes,
      translate and store forms in the database, or expose them through the API. And that's merely the tip of the iceberg.`,
  },
  {
    icon: <AnalyzeIcon />,
    title: 'Analyze your forms',
    description: `Analyze created forms on your project as you need. Whether you want to discover the most popular
      field in your project or track down typos, the schema-first approach boosts your analytic capabilities.`,
  },
  {
    icon: <WysiwygIcon />,
    title: 'WYSIWYG code editor',
    description:
      "Enjoy Forminer's lightness and see how your code changes impact forms in real time.",
  },
];

export const PowerfulFeatures = () => {
  return (
    <SectionLayout
      heading="What makes our form builder so powerful?"
      id="powerful-features"
      centerHeading
    >
      <CardGrid cards={cards} />
    </SectionLayout>
  );
};
