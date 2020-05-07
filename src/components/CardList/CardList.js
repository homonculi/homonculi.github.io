import PropTypes from "prop-types";
import React from "react";

import Card from "./Card";

const CardList = props => {
  const {
    items,
    theme
  } = props;
  return (
    <div>
      <div className="profile-list">
        <ul>
          {items.map(item => {
						const { slug } = item;
            return <Card key={slug} data={item} theme={theme} />;
          })}
        </ul>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .profile-list {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .profile-list {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default CardList;
