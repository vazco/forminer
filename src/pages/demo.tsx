import React, { ReactElement } from 'react';
import Layout from '@theme/Layout';

const Demo = (): ReactElement => {
  return (
    <Layout title="Form Builder demo" wrapperClassName="demo-container">
      <iframe
        title="Form Builder demo"
        src="https://vazco.github.io/uniforms-form-builder/"
      />
    </Layout>
  );
};

export default Demo;
