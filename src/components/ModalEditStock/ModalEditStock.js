import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/all";

import { Modal } from "../../components/index";
import { Stock } from "../../models";
import { useNotif } from "../../context/notif/notifications.context";

const ModalEditStock = ({ stockToEdit, open, close }) => {
  const { pushNotif } = useNotif();

  const [newStock, setNewStock] = useState(stockToEdit);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { name, quantity, description } = newStock;
    const {
      name: oldName,
      quantity: oldQuantity,
      description: oldDescription,
    } = stockToEdit;

    const condition =
      name !== oldName ||
      quantity !== oldQuantity ||
      description !== oldDescription;

    setIsValid(condition);
  }, [newStock]);

  const updateStock = async () => {
    const { name, quantity, description } = newStock;

    try {
      await DataStore.save(
        Stock.copyOf(stockToEdit, (updated) => {
          updated.name = name;
          updated.description = description;
          updated.quantity = quantity;
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
      validationCondition={isValid}
    >
      <h3>All fields required</h3>
      <br />
      <input
        name="name"
        className="input is-large block"
        type="text"
        value={newStock.name}
        placeholder="Name"
        onChange={onChange}
      />
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
                className="button is-primary is-large is-fullwidth"
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
