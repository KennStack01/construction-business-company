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
      allDatoCmsCompanyService {
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

      result.data.allDatoCmsCompanyService.edges.forEach(({ node }) => {
        createPage({
          component: path.resolve(`./src/components/Services/PageContent.js`),
          path: `/services/${node.slug}`,
          context: {
            slug: node.slug,
          },
        })
      })
    })
    .catch(error => {
      console.log(error.message)
    })
}
