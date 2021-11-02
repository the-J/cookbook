import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/all";

import getImgURL from "../../utils/getImgURL";

const Card = ({ name, quantity, img, editStock, deleteStock }) => {
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
      className="card m-2 p-0 is-hovered"
      style={{
        boxSizing: "border-box",
        inlineSize: "250px",
        width: "250px",
        userSelect: "none",
      }}
    >
      <div className="card-image">
        <figure className="image is-square">
          <img src={imgURL} alt="Placeholder" />
        </figure>
      </div>

      <div className="card-content pb-4">
        <div className="media-content ">
          <p
            className="title is-5"
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {name}
          </p>
          {quantity >= 0 && <p className="subtitle is-6">{quantity}</p>}
        </div>
      </div>

      <footer className="card-footer">
        <button
          onClick={() => editStock()}
          className="button is-small is-info card-footer-item"
        >
          <AiTwotoneEdit />
        </button>
        <button
          className="button is-danger is-small card-footer-item"
          onClick={() => deleteStock()}
        >
          <AiFillDelete />
        </button>
      </footer>
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

export default Card;
