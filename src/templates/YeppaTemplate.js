import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import _ from "lodash";

import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { ThemeContext } from "../layouts";

const YeppaTemplate = props => {
  const {
    data: {
      boi: {
        name,
        bio,
        permalink,
        categories,
        social,
        heroImage,
      },
      images: {
        edges: images,
      },
    }
  } = props;

  const imgs = _.isEmpty(images) ? [] :
    images.map(({node}) => ({
      ...node.childImageSharp.fluid,
      relativePath: node.relativePath
    }));
  const hero = _.find(imgs, i => i.relativePath === heroImage );
  const seoData = {
    title: name,
    description: bio,
    cover: hero,
  };

	const heroProps = {
		title: name,
		subtitle: bio,
		backgrounds: {
			mobile: hero.src,
			tablet: hero.src,
			desktop: hero.src,
		},

	}


  return (
    <React.Fragment>

      <ThemeContext.Consumer>
        {theme => (
          <React.Fragment>
            <Hero {...heroProps} theme={theme} />
            <h2> {name} </h2>
          </React.Fragment>

        )}
      </ThemeContext.Consumer>
      <Seo data={seoData} />
    </React.Fragment>
  );
};

export default YeppaTemplate;

YeppaTemplate.propTypes = {
  data: PropTypes.shape({
    boi: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string),
      social: PropTypes.object,
    }),
  })
};

export const yeppaQuery = graphql`
  query YeppaBoiData(
    $name: String!,
    $imageDirectory: String!
  ) {
    boi: yeppasYaml(
      name: { eq: $name }
    ) {
      name
      bio
      permalink
      categories
      heroImage
      social {
        instagram
      }
    }
    images: allFile(
      filter: {
        sourceInstanceName: {eq: "images" }
        relativePath: { regex: $imageDirectory }
      } ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;