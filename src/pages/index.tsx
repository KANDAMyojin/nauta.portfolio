import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const { StaticImage } = require('gatsby-plugin-image')

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FC } from "react"
import Header from "../components/header"
import { GraphCms_Member, GraphCms_Product } from "../generated/graphql"
import Product from "../components/product"
import Member from "../components/member"

const IndexPage: FC<{}> = () => {
  const data = useStaticQuery(graphql`
      query IndexPageQuery {
          site {
              siteMetadata {
                  title
              }
          }

          file(name: {eq: "yacht-animate"}) {
              publicURL
          }
          
          allGraphCmsProduct {
              nodes {
                  name
                  description
                  url
                  image {
                      url
                  }
              }
          }
          
          allGraphCmsMember {
              nodes {
                  name
                  technicalFields
                  githubAccount
                  twitterAccount
                  icon {
                      url
                  }
                  cover {
                      url
                  }
              }
          }
      }
  `)
  const title = data.site.siteMetadata?.title
  const yachtImageUrl = data.file.publicURL
  const products: GraphCms_Product[] = data.allGraphCmsProduct.nodes
  const members: GraphCms_Member[] = data.allGraphCmsMember.nodes

  return (
    <>
      <section className="hero is-info">
        <div className="hero-head">
          <Header siteTitle={title || `Title`} />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered is-marginless">
              <div className="column is-6">
                <p className="title is-1">
                  nauta
                </p>

                <p>
                  nauta sails towards Blue Ocean
                </p>
              </div>
              <div className="column">
                <img src={yachtImageUrl} alt="Yacht" width="300" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="columns has-text-centered is-marginless">
            <div className="column is-10">
              <h1 className="title is-1 shippori pt-6">
                Products
              </h1>

              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  {products.map((product) => (
                    <Product product={product} />
                  ))}
                </div>
              </div>

              <h1 className="title is-1 shippori pt-6">
                Members
              </h1>

              <div className="columns">

                  {members.map((member) => (

                    <div className="column is-4">
                      <Member member={member} />
                    </div>
                  ))}

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
