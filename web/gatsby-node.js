const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createRecipePages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRecipe(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const recipeEdges = (result.data.allSanityRecipe || {}).edges || [];

  recipeEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/recipe/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/recipe.js"),
        context: { id }
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createRecipePages(graphql, actions);
};
