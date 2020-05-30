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
const ProjectSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "streaks.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 4608) {
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
        id="projects"
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
const Projects = styled(ProjectSection)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  &:hover {
    opacity: 0.90;
  }

`

export default Projects
