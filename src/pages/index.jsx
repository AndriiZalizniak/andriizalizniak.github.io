import React from "react";
import ThemeProvider from "@/store/ThemeProvider";
import Layout from "@/template/Layout";
import PageConfig from "@/mocks/pageConfig";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout pageClass={PageConfig.home.class}>
        {(commonData) => (
          <>
            <h1 className={"az-h1"}>index</h1>
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
