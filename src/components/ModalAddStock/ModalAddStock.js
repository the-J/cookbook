import { BiImageAdd } from "react-icons/all";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { DataStore } from "@aws-amplify/datastore";

import { ImageCapture, Modal } from "../../components/index";
import { Stock } from "../../models";
import useUploadPhoto from "../../hooks/useUploadImage";
import { useAuthContext } from "../../context/auth/auth.context";

const initialState = {
  name: "",
  quantity: 0,
  description: "",
  imgName: "",
};

const ModalAddStock = ({ open = false, close }) => {
  const { state } = useAuthContext();
  const { imgName, uploadImage } = useUploadPhoto();

  const [displayImageCapture, setDisplayImageCapture] = useState(false);
  const [newStock, setNewStock] = useState(initialState);

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setNewStock({
      ...newStock,
      [name]: value,
    });
  };

  const createStock = async ()=> {
    // @TODO validate all that shiiiiiii
    const createdStock = {
      ...newStock,
      quantity: Number(newStock.quantity),
      id: nanoid(),
      creatorID: state.user.id,
      createdAt: new Date().toISOString(),
      imgName,
    };

    // @TODO createStock
    try {
      await DataStore.save(new Stock({ ...createdStock }));
      setNewStock(initialState);
    } catch (error) {}

    close();
  }

  return (
    <Modal
      title="Add New Stock"
      openState={open}
      closeModal={() => {
        setDisplayImageCapture(false);
        close();
      }}
      saveChanges={() => createStock()}
      saveChangesText="Add"
    >
      <h3>All fields required</h3>
      <br />
      <ImageCapture
        startCamera={displayImageCapture}
        uploadImage={uploadImage}
      />
      <div className="field is-grouped">
        <input
          name="name"
          className="input is-large mr-3"
          type="text"
          value={newStock.name}
          placeholder="Name"
          onChange={onChange}
        />
        <button
          onClick={() => setDisplayImageCapture(!displayImageCapture)}
          className={`button is-success is-large`}
        >
          <BiImageAdd />
        </button>
      </div>
      <input
        name="quantity"
        className="input is-large block"
        type="number"
        value={newStock.quantity}
        placeholder="Quantity"
        onChange={onChange}
      />
      <textarea
        name="description"
        className="textarea has-fixed-size block"
        placeholder="Description"
        onChange={onChange}
      />
    </Modal>
  );
};

export default ModalAddStock;
