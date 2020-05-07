import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import _ from 'lodash';
import { ThemeContext } from "../layouts";
import CardList from "../components/CardList";

const ShibaiPage = props => {
  // page for profiles
  // data from yml template files -> markdown for search capabilities?
  const {
    data: {
      bois: {
        edges: bois
      },
      images: {
        edges: images
      }
    },
  } = props;

  // compile profiles and images to card data format
  const profiles = bois.map(({node: b}) => {
    console.log('make profiles', b, b.cardImage);
    const image = _.find(images, (i) => i.node.relativePath === b.cardImage);
    return { 
      image: image && image.node.childImageSharp.fluid,
      slug: b.permalink,
      title: b.name, 
      subtitle: b.bio,
      categories: b.categories 
    };
  });

  console.log('yeppa page', images, bois, profiles);
  return (
    <React.Fragment>
      <h1 id="yeppa-title"> Much pretty bois. Many makeups </h1>
      <ThemeContext.Consumer>
        {theme => (
          <CardList items={profiles} theme={theme}/>
        )}
      </ThemeContext.Consumer>
      <style jsx>{`
        #yeppa-title {
          margin-top: 10%;
          text-align: center;
        }
        hr {
          margin: 0;
          border: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ShibaiPage;

export const shibaiQuery = graphql`
  query ShibaiBois {
    bois: allYeppasYaml(
      filter: { categories: { in: "씨발" } }
    ) {
      edges {
        node {
          name
          bio
          categories
          permalink
          cardImage
        } 
      }
    }
    images: allFile(
      filter: {
        relativePath: { regex: "images\/yeppas\/"}
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
