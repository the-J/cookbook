import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { LayoutMain } from "../../layouts";
import { Card, Modal } from "../../components";
import { fetchAllStock } from "../../db/queries";
import { useError } from "../../context/error.context";
import { createNewStock } from "../../db/mutations";

const PantryView = () => {
  const { addError } = useError();
  const [openModalState, setOpenModalState] = useState(false);
  const [stock, setStock] = useState([]);

  const fetchStock = async () => {
    // @TODO handle this parts better
    await fetchAllStock()
      .then((data) => data && setStock(data))
      .catch((err) => addError(err));
  };

  useEffect(() => {
    fetchStock();
  }, []);

  const [newStock, setNewStock] = useState({
    name: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setNewStock({
      ...newStock,
      [name]: value,
    });
  };

  const createStock = async () => {
    await createNewStock(newStock)
      .then((data) => console.log({ data }))
      .catch((err) => console.log({ err }))
      .finally(() => setOpenModalState(false));
  };

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
          onChange={(e) => handleChange(e)}
        />
        <input
          name="quantity"
          className="input is-large"
          type="number"
          value={newStock.quantity}
          placeholder="Quantity"
          onChange={(e) => handleChange(e)}
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
