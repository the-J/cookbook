import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DataStore } from "@aws-amplify/datastore";
import { nanoid } from "nanoid";

import { Stock } from "../../models";
import { LayoutMain } from "../../layouts";
import { Card, Modal } from "../../components";
import { useAuthContext } from "../../context/auth/auth.context";

const initialState = {
  name: "",
  quantity: 0,
};

const dummyState = {
  name: "test",
  quantity: 10,
  // readonly creatorID: string;
  description: "test description",
};

const PantryView = () => {
  const { state } = useAuthContext();
  console.log({ state });
  const [openModalState, setOpenModalState] = useState(false);
  const [stock, setStock] = useState([]);
  const [newStock, setNewStock] = useState(initialState);

  useEffect(() => {
    console.log("fetchstock effect");

    fetchStock();
    const subscription = DataStore.observe(Stock).subscribe(() => fetchStock());
    return () => subscription.unsubscribe();
  }, []);

  function onChange(e) {
    console.log("inchange");
    e.preventDefault();
    let value = e.target.value;
    const name = e.target.name;

    if (name === "quantity") {
      value = Number(value);
    }

    console.log(name, value, typeof value);
    setNewStock({
      ...newStock,
      [name]: value,
    });
  }

  async function fetchStock() {
    console.log("fetchstock");

    const stock = await DataStore.query(Stock);
    setStock(stock);
  }
  async function createStock() {
    console.log("createStock");

    const createdStock = {
      ...newStock,
      id: nanoid(),
      creatorID: state.userConfig.username,
      createdAt: new Date().toISOString(),
      description: "description",
    };

    console.log("asdasdasdasdasdasdasdasdasdasdasdawdasdawda", {
      createdStock,
    });

    // @TODO createStock
    try {
      await DataStore.save(new Stock({ ...createdStock }));
      setNewStock(initialState);

      console.log("Stock saved successfully!");
    } catch (error) {
      console.log("Error saving stock", error);
    }
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
        <input
          name="name"
          className="input is-large"
          type="text"
          value={newStock.name}
          placeholder="Name"
          onChange={onChange}
        />
        <input
          name="quantity"
          className="input is-large"
          type="number"
          value={newStock.quantity}
          placeholder="Quantity"
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
                <FontAwesomeIcon icon={faPlus} />
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
