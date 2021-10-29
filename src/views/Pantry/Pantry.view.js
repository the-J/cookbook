import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { nanoid } from "nanoid";

import { Stock } from "../../models";
import { LayoutMain } from "../../layouts";
import { Card, ImageCapture, Modal } from "../../components";
import { useAuthContext } from "../../context/auth/auth.context";
import { AiOutlinePlus, BiImageAdd } from "react-icons/all";

const initialState = {
  name: "",
  quantity: 0,
  description: "",
};

const PantryView = () => {
  const { state } = useAuthContext();
  const [openModalState, setOpenModalState] = useState(false);
  const [stock, setStock] = useState([]);
  const [newStock, setNewStock] = useState(initialState);
  const [displayImageCapture, setDisplayImageCapture] = useState(false);

  useEffect(() => {
    fetchStock();
    const subscription = DataStore.observe(Stock).subscribe(() => fetchStock());
    return () => subscription.unsubscribe();
  }, []);

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setNewStock({
      ...newStock,
      [name]: value,
    });
  }

  async function fetchStock() {
    const stock = await DataStore.query(Stock);
    setStock(stock ? stock : []);
  }

  async function createStock() {
    console.log("createStock");

    const createdStock = {
      ...newStock,
      quantity: Number(newStock.quantity),
      id: nanoid(),
      creatorID: state.user.id,
      createdAt: new Date().toISOString(),
    };

    // @TODO createStock
    try {
      await DataStore.save(new Stock({ ...createdStock }));
      setNewStock(initialState);

      console.log("Stock saved successfully!");
    } catch (error) {
      console.log("Error saving stock", error);
    }

    setOpenModalState(false);
  }

  return (
    <>
      <Modal
        title="Add New Stock"
        openState={openModalState}
        closeModal={() => setOpenModalState(false)}
        saveChanges={(e) => {
          e.preventDefault();
          return createStock();
        }}
      >
        <h3>All fields required</h3>
        <br />
        {displayImageCapture && (
          <ImageCapture startCamera={displayImageCapture} />
        )}
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
            // className={`button is-primary ${isLoggingIn && "is-loading"}`}
            className={`button is-success is-large`}
            type="submit"
            // disabled={!isValid}
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
      <LayoutMain>
        <div
          className="
            column
            is-10
            is-offset-1
            is-flex
            is-justify-content-flex-start
            is-align-items-center
            p-0
            mb-2
        "
        >
          <div style={{ minHeight: "50px" }}>
            <button
              className="button is-success"
              type="button"
              onClick={() => {
                console.log("button");
                setOpenModalState(true);
              }}
            >
              <span className="icon">
                <AiOutlinePlus />
              </span>
            </button>
          </div>
        </div>
        <div className="columns">
          <div
            className="
            column
            is-10
            is-offset-1
            is-flex
            is-flex-wrap-wrap
            is-justify-content-center
            is-align-items-center
            p-0
        "
          >
            {stock.length > 0 ? (
              stock.map((el, i) => (
                <Card
                  name={el.name}
                  date={el.createdAt}
                  description={el.description}
                  quantity={el.quantity}
                  key={i}
                />
              ))
            ) : (
              <div>Nothing here</div>
            )}
          </div>
        </div>
      </LayoutMain>
    </>
  );
};

export default PantryView;
