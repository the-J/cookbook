import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { trimToLength } from "../../utils/utils";
import getImgURL from "../../utils/getImgURL";

const Card = ({ name, quantity, img, editStock }) => {
  const [imgURL, setImgURL] = useState(img);

  const getImage = async () => {
    // @TODO better validation - this is stupid :)
    if (!img.includes("http")) {
      const imgURL = await getImgURL(img);
      setImgURL(imgURL);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div
      className="card m-1 is-hovered"
      style={{
        boxSizing: "border-box",
        maxWidth: "350px",
        minWidth: "200px",
        userSelect: "none",
      }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgURL} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{trimToLength(name, 10)}</p>
            {quantity >= 0 && <p className="subtitle is-6">{quantity}</p>}
            <button
              className="button is-pulled-right is-small is-info"
              onClick={() => editStock()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  editStock: PropTypes.func,
};

Card.defaultProps = {
  img: "https://bulma.io/images/placeholders/1280x960.png",
};

export default Card;
