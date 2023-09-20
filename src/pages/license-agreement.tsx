import Layout from '@theme/Layout';
import React from 'react';

const LicenseAgreement = () => {
  return (
    <Layout title="License Agreement">
      <iframe
        src="http://localhost:3000/pdf/license-agreement.pdf"
        title="License Agreement"
        width="100%"
        style={{ height: 'calc(100vh - 60px)' }}
      />
    </Layout>
  );
};

export default LicenseAgreement;
