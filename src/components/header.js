import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1e1a1d`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#e7ecef`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h5 style={{ textAlign: "right"}}>
        <Link
          to="/about"
          style={{
            color: `#e7ecef`,
            textDecoration: `none`,
          }}
        >
          {" "}
          About
        </Link>

        <Link
          to="/projects"
          style={{
            color: `#e7ecef`,
            textDecoration: `none`,
            margin: `2em`
          }}
        >
          Projects
        </Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
