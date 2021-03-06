import * as React from "react"
import { Link } from "gatsby"

const { StaticImage } = require('gatsby-plugin-image')

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FC } from "react"

const AboutPage: FC<{}> = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="title is-1">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default AboutPage
