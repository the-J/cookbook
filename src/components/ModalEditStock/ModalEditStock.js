import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { AiOutlinePlus, AiOutlineMinus, BiImageAdd } from "react-icons/all";

import { ImageCapture, Modal } from "../../components/index";
import { Stock } from "../../models";
import { useNotif } from "../../context/notif/notifications.context";
import useUploadPhoto from "../../hooks/useUploadImage";

const ModalEditStock = ({ stockToEdit, open, close }) => {
  const { pushNotif } = useNotif();
  const { imgName, imgUploading, uploadImage } = useUploadPhoto();

  const [newStock, setNewStock] = useState(stockToEdit);
  const [isValid, setIsValid] = useState(false);
  const [displayImageCapture, setDisplayImageCapture] = useState(false);

  useEffect(() => {
    const { name, quantity, description, imgName: newImgName } = newStock;
    const {
      name: oldName,
      quantity: oldQuantity,
      description: oldDescription,
      imgName: oldImgName,
    } = stockToEdit;

    const condition =
      name !== oldName ||
      quantity !== oldQuantity ||
      description !== oldDescription ||
      oldImgName !== newImgName;

    setIsValid(condition);
  }, [newStock]);

  useEffect(() => {
    if (imgName) setNewStock({ ...newStock, imgName });
  }, [imgName]);

  const updateStock = async () => {
    const { name, quantity, description, imgName: newImgName } = newStock;

    try {
      await DataStore.save(
        Stock.copyOf(stockToEdit, (updated) => {
          updated.name = name;
          updated.description = description;
          updated.quantity = quantity;
          updated.imgName = newImgName || stockToEdit.imgName;
        })
      );

      close();
    } catch (error) {
      pushNotif(error.message, "err");
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = name === "quantity" ? Number(e.target.value) : e.target.value;

    setNewStock({
      ...newStock,
      [name]: value,
    });
  };

  return (
    <Modal
      title={`Update: ${stockToEdit.name}`}
      openState={open}
      closeModal={() => {
        setNewStock(null);
        close();
      }}
      saveChanges={() => updateStock()}
      saveChangesText="Update"
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
          className="input is-large block"
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
        onChange={onChange}
        value={newStock.description}
        style={{ fontSize: "20px" }}
      />
    </Modal>
  );
};

export default ModalEditStock;
