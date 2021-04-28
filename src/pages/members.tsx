import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GraphCms_Member, GraphCms_MemberConnection } from "../generated/graphql"
import Layout from "../components/layout"

const pageQuery = graphql`
    {
        gcms {
            members {
                name
                birthday
                twitterAccount
                githubAccount
                technicalFields
            }
        }
    }
`

const MembersPage = () => {
  const { members }: { members: GraphCms_Member[] } = useStaticQuery(pageQuery).gcms

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-offset-1 is-10 has-text-centered">
            {members.map((member) => (
              <div>
                <h1>{member.name}</h1>
                
                <div className="tags has-addons">
                  <span className="tag is-black">Github</span>
                  <span className="tag">{member.githubAccount}</span>
                </div>
                <div className="tags has-addons">
                  <span className="tag is-info">Twitter</span>
                  <span className="tag">{member.twitterAccount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default MembersPage