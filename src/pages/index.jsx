import React from "react";
import ThemeProvider from "@/store/ThemeProvider";
import Layout from "@/template/Layout";
import PageConfig from "@/mocks/pageConfig";

import Hero from "@/template/Pages/Home/Hero";
import Subhero from "@/template/Pages/Home/Subhero";
import Solution from "@/template/Pages/Home/Solution";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout pageClass={PageConfig.home.class}>
        {(commonData) => (
          <>
            <Hero />
            <Solution />
            <Subhero />
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
