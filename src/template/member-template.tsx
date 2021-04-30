import * as React from "react"
import { FC } from "react"
import { GraphCms_Event, GraphCms_EventConnection, GraphCms_Member } from "../generated/graphql"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MemberTimeline from "../components/memberTimeline"

type memberTemplateProps = {
  data: {
    graphCmsMember: GraphCms_Member,
    allGraphCmsEvent: GraphCms_EventConnection
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
            cover {
                url
            }
        }

        allGraphCmsEvent(filter: {member: {name: {eq: $name}}}) {
            nodes {
                timelineType
                eventName
                date
            }
        }
    }
`

const MemberTemplate: FC<memberTemplateProps> = ({ data }) => {
  const { graphCmsMember }: { graphCmsMember: GraphCms_Member} = data
  const { allGraphCmsEvent } : {allGraphCmsEvent: React.ComponentProps<typeof MemberTimeline>} = data

  return (
    <Layout>
      <div className="tile is-ancestor">
        <div className="tile is-8 is-parent">
          <div className="tile is-child">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={!!graphCmsMember.cover ? graphCmsMember.cover.url : "https://bulma.io/images/placeholders/1280x960.png"} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img
                        src={!!graphCmsMember.icon ? graphCmsMember.icon.url : `https://bulma.io/images/placeholders/128x128.png`}
                        alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{graphCmsMember.name}</p>
                    <p className="subtitle is-6">{graphCmsMember.technicalFields}</p>
                  </div>
                </div>

                <div className="content">
                  {graphCmsMember.description}
                </div>
              </div>
            </div>
            {/*<p className="title">*/}
            {/*  {graphCmsMember.name}*/}
            {/*</p>*/}
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box has-background-info-light">
            <MemberTimeline nodes={allGraphCmsEvent.nodes} />
          </div>
        </div>

      </div>
    </Layout>
  )

}

export default MemberTemplate