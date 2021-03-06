import * as React from "react"
import { Link } from "gatsby"
import { FC } from "react"

type headerProps = {
  siteTitle: string
}

const Header: FC<headerProps> = ({ siteTitle }) => (
  <nav className="navbar has-background-info-dark" role="navigation" aria-label="main navigation">

    <div className="navbar-brand is-vertical-center">
      <h1 className="title pl-4">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </nav>
)


export default Header
