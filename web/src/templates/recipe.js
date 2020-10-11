import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Recipe from "../components/recipe";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query RecipeTemplateQuery($id: String!) {
    recipe: sanityRecipe(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const RecipeTemplate = props => {
  const { data, errors } = props;
  const recipe = data && data.recipe;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {recipe && (
        <SEO
          title={recipe.title || "Untitled"}
          description={toPlainText(recipe._rawExcerpt)}
          image={recipe.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {recipe && <Recipe {...recipe} />}
    </Layout>
  );
};

export default RecipeTemplate;
