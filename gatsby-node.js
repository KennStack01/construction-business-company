const path = require(`path`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    query {
      allDatoCmsRealisation {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allDatoCmsRealisation.edges.forEach(({ node }) => {
        createPage({
          component: path.resolve(
            `./src/components/Realisations/PageContent.js`
          ),
          path: `/realisations/${node.slug}`,
          context: {
            slug: node.slug,
          },
        })
      })

      //   result.data.allDatoCmsRecitEtPoesie.edges.forEach(({ node }) => {
      //     createPage({
      //       component: path.resolve(
      //         `./src/templates/RecitsEtPoesie/TemplateFoRecit.js`
      //       ),
      //       path: `/recits/${node.slug}`,
      //       context: {
      //         slug: node.slug,
      //       },
      //     })
      //   })
    })
    .catch(error => {
      console.log(error.message)
    })
}
