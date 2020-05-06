import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import { ThemeContext } from "../layouts";
import ProfileList from "../components/ProfileList";

// 
const YeppaPage = (props) => {
  // page for profiles
  // data from yml template files -> markdown for search capabilities?
  const {
    data: {
      bois: {
        edges: bois
      },
    },
  } = props;

  return (
    <React.Fragment>
      <h1> Much pretty bois. Many makeups </h1>
      <ThemeContext.Provider>
        {theme => (
          <ProfileList profiles={bois} theme={theme} />
        )}
      </ThemeContext.Provider>
    </React.Fragment>
  );

};

export default YeppaPage;

export const yeppaQuery = graphql`
  query ShibaiBois {
    bois: allYeppasYaml(
      filter: { categories: { in: "씨발" } }
    ) {
      edges {
        node {
          name
          bio
          categories
          social {
            instagram
          }
        } 
      }
    }
  }
`;
