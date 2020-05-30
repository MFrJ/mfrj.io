import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import About from "../components/about"
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About style={{maxWidth: `100%`, opacity: `0.5`}}>
    </About>
    <Projects style={{maxWidth: `100%`}}>

    </Projects>
  
  </Layout>
)

export default IndexPage
