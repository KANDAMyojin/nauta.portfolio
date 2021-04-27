import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import { GraphCms_AuthorConnection } from "../generated/graphql"

const pageQuery = graphql`
    {
        authors: allGraphCmsAuthor {
            nodes {
                name
                title
                biography
            }
        }
    }
`

const AuthorsPage = () => {

  const { authors }: {authors: GraphCms_AuthorConnection} = useStaticQuery(pageQuery)
  return(
    <div>
      {authors.nodes.map(({name, biography, title}) => (
        <div>
          {name}
        </div>
      ))}
    </div>
  )
}

export default AuthorsPage;