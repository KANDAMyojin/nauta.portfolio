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
        }
    }
        
`

const MemberTemplate: FC<memberTemplateProps> = ({data}) => {
  const { graphCmsMember }: {graphCmsMember: GraphCms_Member} = data

    return(
      <Layout>
        <p className="title">{graphCmsMember.name}</p>
      </Layout>
    )

}

export default MemberTemplate