import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { FaArrowDown } from "react-icons/fa/";

import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import CardList from "../components/CardList";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.separator = React.createRef();
  }

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
				yeppas,
				yeppaImgs,
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

		console.log('yeppas', yeppas, yeppaImgs);
    const backgrounds = {
      desktop,
      tablet,
      mobile
		};
		
		const yeppaCards = yeppas.edges.map((y) => {
			const {
				name,
				slug,
				bio,
				permalink,
				categories,
				cardImage,
			} = y.node;
			const image = yeppaImgs.edges.filter(img =>
					img.node.relativePath === cardImage)[0];
			// format to CardItem props
			console.log('image,', y, cardImage, image, yeppaImgs.edges.filter(img =>img.node.relativePath === cardImage));
			return {
				title: name,
				slug: permalink || slug,
				subtitle: bio,
				categories,
				image: image ? image.node.childImageSharp.fluid : null,
			}
		})

    return (
      <>
        <Seo facebook={facebook} />
        <ThemeContext.Consumer>
          {theme => (
            <Hero
              onCtaClick={this.scrollToContent}
              backgrounds={backgrounds}
              theme={theme}
              title="한국에서 가장 예뻐 사람들"
              ctaContent={FaArrowDown()}
            />
          )}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {/* {theme => <Blog posts={posts} theme={theme} />} */}
					{theme => <CardList items={yeppaCards} theme={theme} />}
        </ThemeContext.Consumer>
      </>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
		yeppas: allYeppasYaml {
			edges {
				node{
					name,
					slug,
					bio,
					permalink,
					categories,
					cardImage
				}
			}
		}

		yeppaImgs: allFile(
      filter: {
        sourceInstanceName: {eq: "images" }
        relativePath: { regex: "/yeppas/" }
      } ) {
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

    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/index-hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/index-hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/index-hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
