/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const memberTemplate = path.resolve('./src/template/member-template.tsx')

  const members = await graphql(`
    query {
      allGraphCmsMember {
        nodes {
          name
        }
      }
    }  
  `)

  members.data.allGraphCmsMember.nodes.forEach(({name}) => {
    const page = {
      component: memberTemplate,
      path: `/member/${name}`,
      context: {
        name: name
      }
    }
    console.log(page)
    createPage(page)
  })

}