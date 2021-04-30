import * as React from "react"
import { graphql,  useStaticQuery } from "gatsby"


import { FC } from "react"
import Header from "../components/header"
import { GraphCms_Member, GraphCms_Product } from "../generated/graphql"
import ProductRoll from "../components/productRoll"
import MemberRoll from "../components/memberRoll"

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
            <div className="column is-10 is-offset-1">
              <section className={`section`}>
                <h1 className="title is-1 shippori stripe-blue">
                  Products
                </h1>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    {products.map((product) => (
                      <ProductRoll product={product} />
                    ))}
                  </div>
                </div>
              </section>

              <section className="section">
                <h1 className="title is-1 shippori pt-6 stripe-orange">
                  Members
                </h1>

                <div className="columns is-multiline">

                  {members.map((member) => (

                    <div className="column is-4">
                      <MemberRoll member={member} />
                    </div>
                  ))}

                </div>
              </section>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
