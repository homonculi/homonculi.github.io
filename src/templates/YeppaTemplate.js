import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { ThemeContext } from "../layouts";

const YeppaTemplate = props => {
  console.log('yeppa ', props);
  const {
    data: {
      boi: {
        name,
        bio,
        categories,
        social,
      },
    }
  } = props;

  return (
    <React.Fragment>
      <h2> {name} </h2>
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
  query YeppaBoiData($name: String!) {
    boi: yeppasYaml(
      name: { eq: $name }
    ) {
      name
      bio
      categories
      social {
        instagram
      }
    }
  }
`;
