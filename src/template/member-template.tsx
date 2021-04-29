import * as React from "react"
import { FC } from "react"
import { GraphCms_Member } from "../generated/graphql"
import { graphql } from "gatsby"
import Layout from "../components/layout"

type memberTemplateProps = {
  data: {
    graphCmsMember: GraphCms_Member
  }
}

export const query = graphql`
    query ($name: String!){
        graphCmsMember(name: {eq: $name}) {
            name
            twitterAccount
            technicalFields
            githubAccount
            birthday
            icon {
                url
            }
        }
    }
        
`

const MemberTemplate: FC<memberTemplateProps> = ({data}) => {
  const { graphCmsMember }: {graphCmsMember: GraphCms_Member} = data

    return(
      <Layout>
        <div className="tile is-ancestor">
          <div className="tile is-4">
            <figure className="image is-128x128">
              <img src={!!graphCmsMember.icon ? graphCmsMember.icon.url : `https://bulma.io/images/placeholders/128x128.png`}
                   alt="Placeholder image" />
            </figure>
          </div>
          <div className="tile">
            <p className="title">
              {graphCmsMember.name}
            </p>
          </div>
        </div>
      </Layout>
    )

}

export default MemberTemplate