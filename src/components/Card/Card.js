import React from "react";
import PropTypes from "prop-types";
import { trimToLength } from "../../utils/utils";

const Card = ({ name, subTitle, date, description, quantity }) => {
  return (
    <div
      className="card m-1"
      style={{ boxSizing: "border-box", maxWidth: "350px", minWidth: "200px" }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{trimToLength(name, 10)}</p>
            {subTitle && <p className="subtitle is-6">{subTitle}</p>}
            {quantity && <p className="subtitle is-6">{quantity}</p>}
          </div>
        </div>

        {description && date && (
          <div className="content">
            <p>{description}</p>
            <time dateTime="2016-1-1">{date.split("T")[0]}</time>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  name: "",
};

export default Card;
