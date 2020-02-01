import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h3 className="is-size-4">Cirrus HR</h3>
      </Link>
      <Link className="navbar-item" to="/">
        About us
      </Link>
      <Link className="navbar-item" to="/page-2">
        Page 2
      </Link>
      <Link className="navbar-item" to="/app">
        App
      </Link>

      <Link className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Link>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
