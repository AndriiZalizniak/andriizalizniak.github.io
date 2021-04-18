import React from 'react';
import Layout from '@/template/Layout';
import PageConfig from '@/mocks/pageConfig';

const IndexPage = () => {
  return (
    <Layout
      pageClass={PageConfig.home.class}
    >
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
