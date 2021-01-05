import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
    <div class="page-links">
      <Link to="/page-2/">Blog</Link>
      <Link to="/using-typescript/">Store</Link>
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
