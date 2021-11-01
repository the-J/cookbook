import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/all";
import { nanoid } from "nanoid";
import { DataStore } from "@aws-amplify/datastore";

import { ImageCapture, Modal } from "../../components/index";
import { Stock } from "../../models";
import useUploadPhoto from "../../hooks/useUploadImage";
import { useAuthContext } from "../../context/auth/auth.context";
import { useNotif } from "../../context/notif/notifications.context";

const initialState = {
  name: undefined,
  quantity: 0,
  description: undefined,
  imgName: undefined,
};

const ModalAddStock = ({ open, close }) => {
  const { state } = useAuthContext();
  const { imgName, uploadImage } = useUploadPhoto();
  const { pushNotif } = useNotif();

  const [isValid, setIsValid] = useState(false);
  const [displayImageCapture, setDisplayImageCapture] = useState(false);
  const [newStock, setNewStock] = useState(initialState);

  useEffect(() => {
    const { name, quantity, description, imgName } = newStock;
    const condition = !!name && !!quantity && !!description && !!imgName;
    setIsValid(condition);
  }, [newStock]);

  useEffect(() => {
    setNewStock({ ...newStock, imgName });
  }, [imgName]);

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = name === "quantity" ? Number(e.target.value) : e.target.value;

    setNewStock({
      ...newStock,
      [name]: value,
    });
  };

  const createStock = async () => {
    const createdStock = {
      ...newStock,
      id: nanoid(),
      creatorID: state.user.id,
      createdAt: new Date().toISOString(),
      imgName,
    };

    try {
      await DataStore.save(new Stock({ ...createdStock }));
      setNewStock(initialState);
      close();
    } catch (error) {
      pushNotif(error.message);
    }
  };

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
      validationCondition={isValid}
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
