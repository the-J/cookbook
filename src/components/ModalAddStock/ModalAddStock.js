import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, BiImageAdd } from "react-icons/all";
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
  const { imgName, imgUploading, uploadImage } = useUploadPhoto();
  const { pushNotif } = useNotif();

  const [isValid, setIsValid] = useState(false);
  const [displayImageCapture, setDisplayImageCapture] = useState(false);
  const [newStock, setNewStock] = useState(initialState);

  useEffect(() => {
    const { name, quantity, description } = newStock;
    const condition = !!name && !!quantity && !!description;
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
    const newImg = imgName
      ? imgName
      : "https://bulma.io/images/placeholders/1280x960.png";

    const createdStock = {
      ...newStock,
      id: nanoid(),
      creatorID: state.user.id,
      createdAt: new Date().toISOString(),
      imgName: newImg,
    };

    try {
      await DataStore.save(new Stock({ ...createdStock }));
      setNewStock(initialState);
      close();
    } catch (error) {
      pushNotif(error.message, "err");
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
      validationCondition={isValid && !imgUploading}
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
          className="input is-large"
          type="text"
          value={newStock.name}
          placeholder="Name"
          onChange={onChange}
        />
        <button
          onClick={() => setDisplayImageCapture(!displayImageCapture)}
          className={`button is-success is-large ml-3`}
        >
          <BiImageAdd />
        </button>
      </div>
      <div className="columns block">
        <div className="column is-4">
          <input
            name="quantity"
            className="input is-large"
            type="text"
            value={newStock.quantity}
            placeholder="Quantity"
            readOnly
          />
        </div>
        <div className="column is-8">
          <div className="columns">
            <div className="column is-6">
              <button
                className="button is-info is-large is-fullwidth"
                onClick={() =>
                  setNewStock({ ...newStock, quantity: newStock.quantity + 1 })
                }
              >
                <AiOutlinePlus />
              </button>
            </div>
            <div className="column is-6">
              <button
                className="button is-success is-large is-fullwidth"
                onClick={() =>
                  setNewStock({ ...newStock, quantity: newStock.quantity - 1 })
                }
              >
                <AiOutlineMinus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <textarea
        name="description"
        className="textarea has-fixed-size block"
        placeholder="Description"
        onChange={onChange}
        style={{ fontSize: "20px" }}
      />
    </Modal>
  );
};

export default ModalAddStock;
