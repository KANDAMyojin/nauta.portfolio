import * as React from "react"
import { FC } from "react"
import { GraphCms_Member } from "../generated/graphql"
import { graphql, useStaticQuery } from "gatsby"

const Member: FC<{member: GraphCms_Member}> = ({member}) => {

  const data = useStaticQuery(graphql`
    query {
        github: imageSharp(resize: {originalName: {eq: "GitHub-Mark-32px.png"}}) {
            resize {
                originalName
                src
            }
        }

        twitter: imageSharp(resize: {originalName: {eq: "Twitter social icons - square - blue.png"}}) {
            resize {
                originalName
                src
            }
        }
    }
  `)

  const gitHubImage = data.github.resize
  const twitterImage = data.twitter.resize

  return(
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={!!member.icon ? member.icon.url : `https://bulma.io/images/placeholders/96x96.png`} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{member.name}</p>
            <div className="tags has-addons">
              <span className="tag">
                <figure className="image is-16x16">
                  <img src={gitHubImage.src} />
                </figure>
              </span>
              <span className="tag is-gray">{`@${member.githubAccount}`}</span>
            </div><div className="tags has-addons">
              <span className="tag">
                <figure className="image is-16x16">
                  <img src={twitterImage.src} />
                </figure>
              </span>
            <span className="tag is-gray">{`@${member.twitterAccount}`}</span>
          </div>
          </div>
        </div>

        <div className="content">
          {member.description}
        </div>

        <footer className="card-footer">
          <a className="card-footer-item" href={`/member/${member.name}`}>Show More</a>
        </footer>

      </div>
    </div>
  )
}

export default Member