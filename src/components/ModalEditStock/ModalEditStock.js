import getImgURL from "../../utils/getImgURL";
import React, { useEffect, useState } from "react";

import { Modal } from "../";

const ModalEditStock = ({ stock, open = false, close }) => {
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    getImg(stock.imgName);
  }, []);

  const getImg = async () => {
    const url = await getImgURL(stock.imgName);
    setImgURL(url);
  };

  const updateStock = async () => {
    console.log("updateStock");
  };

  return (
    <Modal
      title={`Update: ${stock.name}`}
      openState={open}
      closeModal={() => close()}
      saveChanges={() => updateStock()}
      saveChangesText="Update"
    >
      <h3>All fields required</h3>
      <br />
      <img
        src={
          imgURL ? imgURL : "https://bulma.io/images/placeholders/1280x960.pn"
        }
        alt={stock.imgName}
      />
      <input
        name="name"
        className="input is-large mr-3"
        type="text"
        // value={newStock.name}
        placeholder="Name"
        // onChange={onChange}
      />
      <input
        name="quantity"
        className="input is-large block"
        type="number"
        value={stock.quantity}
        placeholder="Quantity"
        // onChange={onChange}
      />
      <textarea
        name="description"
        className="textarea has-fixed-size block"
        placeholder="Description"
        // onChange={onChange}
      />
    </Modal>
  );
};

export default ModalEditStock;
