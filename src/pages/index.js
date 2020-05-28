import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import StyledFullBackground from "../components/FullBackground"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledFullBackground style={{maxWidth: `100%`, opacity: `0.5`}}>
      
    </StyledFullBackground>
  
  </Layout>
)

export default IndexPage
