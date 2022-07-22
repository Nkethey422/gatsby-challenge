exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allContentfulProduct {
        nodes {
          slug
        }
      }
    }

  `)
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  result.data.allContentfulProduct.nodes.forEach(product =>
    createPage({
      path: `/products/${product.slug}`,
      component: require.resolve('./src/templates/product.js'),
      context:{
        slug: product.slug,
      },
    })
  )
}
