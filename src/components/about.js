import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const AboutSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "brown-and-black.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 3344) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  // Single Image Data
  const imageData = desktop.childImageSharp.fluid

  return (
    <StyledFullScreenWrapper>
      
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
        title="Fullscreen Background"
        id="about"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
        
      </BackgroundImage>
     
    </StyledFullScreenWrapper>
  )
}

//TODO Pass Style as props
const About = styled(AboutSection)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  

`

export default About
