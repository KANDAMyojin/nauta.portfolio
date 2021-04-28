import * as React from "react"
import { FC } from "react"
import { GraphCms_Member } from "../generated/graphql"

const Member: FC<{member: GraphCms_Member}> = ({member}) => {
  console.log(member)
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
            <p className="subtitle is-6">{`@${member.githubAccount}`}</p>
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