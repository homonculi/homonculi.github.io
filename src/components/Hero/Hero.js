import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
  const {
    onCtaClick,
    title,
    subtitle,
    backgrounds,
    theme,
		ctaContent,
		overlayColor,
  } = props;

  return (
    <React.Fragment>
      <section className="hero">
				<div className={`hero-bg-overlay ${overlayColor}`}  />
				<div className="hero-contanet-container">
					{title && <h1>{title}</h1>}
					{subtitle && <h3>{subtitle}</h3>}
					{ctaContent && (
						<button onClick={onCtaClick} aria-label="scroll">
							{ctaContent}
						</button>
					)}
				</div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
					align-items: center;
          background: ${theme.hero.background};
					background-size: cover;
					position: relative;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
				}
				
				h3 {
					color: ${theme.text.color.primary.inverse || 'white'};
					text-align: center;
				}

				.hero-bg-overlay {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					background-color: rgba(0,0,0,0.2);
					z-index: 0;
				}

				.hero-contanet-container {
					z-index: 1;
				}
        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            ${backgrounds && `background-image: url(${backgrounds.tablet})`};
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            ${backgrounds && `background-image: url(${backgrounds.desktop})`};
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  onCtaClick: PropTypes.func,
  ctaContent: PropTypes.node,
  backgrounds: PropTypes.object,
	theme: PropTypes.object.isRequired,
	overlayColor: PropTypes.string,
};

export default Hero;
