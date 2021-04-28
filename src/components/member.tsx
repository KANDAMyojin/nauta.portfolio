import * as React from "react"
import { FC } from "react"
import { GraphCms_Member } from "../generated/graphql"

const Member: FC<{member: GraphCms_Member}> = ({member}) => {
  return(
    <div className="box">
      <p className="title">{member.name}</p>
      <p className="subtitle">{member.technicalFields}</p>
    </div>
  )
}

export default Member