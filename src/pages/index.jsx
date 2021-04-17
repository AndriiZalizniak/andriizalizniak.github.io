import React from 'react';
import Layout from '@/template/Layout';

const IndexPage = () => {
  return (
    <Layout>
      {
        commonData => 
          <>
            <h1 className={'az-h1'}>index</h1>
          </>
      }
    </Layout>
  );
};

export default IndexPage;
