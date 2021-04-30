import * as React from "react"
import { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GraphCms_Event, GraphCms_EventConnection } from "../generated/graphql"


type memberTimelineProps = {
  nodes: GraphCms_Event[]
}

export const MemberTimeline: FC<memberTimelineProps> = ({nodes}) => {

  const sortedEvents = nodes.sort((a, b) => {
    let comparison = 0
    if (a.date > b.date) comparison = 1
    else if(a.date < b.date) comparison = -1
    return comparison
  })

  const TimelineItem: FC<{event: GraphCms_Event}> = ({event}) => {
    if (event.timelineType === 'item') return(
      <div className="timeline-item">
        <div className="timeline-marker is-image is-32x32">
          <img src="https://bulma.io/images/placeholders/32x32.png" />
        </div>
        <div className="timeline-content">
          <p className="heading">{event.date.toString()}</p>
          <p>{event.eventName}</p>
        </div>
      </div>
    )
    else return (
      <header className="timeline-header">
        <span className="tag is-medium is-primary">{event.eventName}</span>
      </header>
    )
  }

  return(
    <div className="timeline">
      <header className="timeline-header">
        <span className="tag is-medium is-primary">Start</span>
      </header>
      { sortedEvents.length > 0 ?
        sortedEvents.map((gcEvent) => (
          <TimelineItem event={gcEvent} />
        )
      ):
      <div>
        <div className="timeline-item">
          <div className="timeline-marker is-image is-32x32">
            <img src="https://bulma.io/images/placeholders/32x32.png" />
          </div>
          <div className="timeline-content">
            <p className="heading">1969-07-20</p>
            <p>Human reached Moon.</p>
          </div>
        </div>
      </div>
      }
      <header className="timeline-header">
        <span className="tag is-medium is-primary">End</span>
      </header>
    </div>
  )
}

export default MemberTimeline