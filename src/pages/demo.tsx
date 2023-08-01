import Layout from '@theme/Layout';
import React from 'react';

const Demo = () => {
  return (
    <Layout title="Forminer demo" wrapperClassName="demo-container">
      <iframe
        className="forminer-demo"
        title="Forminer demo"
        src="https://vazco.github.io/forminer-project-demo/"
      />
    </Layout>
  );
};

export default Demo;
