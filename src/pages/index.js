import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import About from "../components/about"
import Projects from "../components/projects"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <img src={require('../images/maintenance.png')}></img>
    {/* <SEO title="Home" />
    <About style={{ maxWidth: `100%`, opacity: `0.5` }}>
      <div class="about-background">
        <h1 class="about-title">Bom dia!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          hendrerit quam non enim lobortis, a rutrum tortor varius. Etiam
          maximus tellus eu augue volutpat, id finibus lacus consectetur.
          Praesent laoreet, tortor et accumsan sodales, elit dolor hendrerit
          massa, sit amet ullamcorper tellus dolor sit amet turpis. Morbi tortor
          tellus, pulvinar id pharetra vitae, malesuada eget lacus. Pellentesque
          sem augue, eleifend vel dictum ultricies, rutrum sed sem. Cras mattis
          condimentum bibendum. Nam diam enim, finibus in tellus nec,
          ornarecolor consectetur odio. Integer commodo ligula non porta
          ultricies.
        </p>

        <p>
          Nam egestas tortor a pharetra elementum. Nam tellus ante, luctus vel
          ullamcorper ut, dictum a neque. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
          fringilla est nibh, id vehicula velit bibendum nec. Curabitur id elit
          et dolor euismod tempor id sit amet turpis. Suspendisse pulvinar, ante
          sed scelerisque elementum, erat urna cursus nunc, eu finibus nunc ex
          vel ligula. Donec id commodo neque. Sed suscipit mattis odio ac
          lacinia. Nunc in lorem massa. Quisque aliquam, nibh quis aliquam
          laoreet, mauris sem eleifend mauris, et posuere arcu augue nec nulla.
          Ut ac vestibulum massa, at tristique nunc. Vivamus dapibus sapien nec
          porta blandit. Proin nec sem non mi consequat semper. Fusce lectus
          diam, viverra at est a, maximus dapibus ante. Aenean bibendum dolor
          eget arcu tempus tempor. Sed a maximus enim.
        </p>
      </div>
    </About>
    <Projects style={{ maxWidth: `100%` }}></Projects> */}
  </Layout>
)

export default IndexPage
