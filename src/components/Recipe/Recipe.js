import React from "react";
import PropTypes from "prop-types";

const Recipe = ({ recipe }) => {
  return (
    <div className="block">
      <div className="card">
        {/*<div className="card-image">*/}
        {/*  <figure className="image is-4by3">*/}
        {/*    <img*/}
        {/*      src="https://bulma.io/images/placeholders/1280x960.png"*/}
        {/*      alt="Placeholder image"*/}
        {/*    />*/}
        {/*  </figure>*/}
        {/*</div>*/}
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{recipe.name}</p>
              <p className="subtitle is-6">@przepis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
