import React from "react"

import ThemeProvider from "@/store/ThemeProvider"
import Layout from "@/template/Layout"

import PageConfig from "@/mocks/pageConfig"

const Video = () => {
  return (
    <ThemeProvider>
      <Layout pageClass={PageConfig.home.class}>
        {commonData => (
          <>
            <div>Video</div>
          </>
        )}
      </Layout>
    </ThemeProvider>
  )
}

export default Video
