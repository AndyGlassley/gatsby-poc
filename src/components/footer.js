import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"

const Footer = ({ author }) => <footer>Built by {author}</footer>

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: `Andy Glassley`,
}

export default Footer
