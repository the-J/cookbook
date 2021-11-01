import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { AiOutlinePlus } from "react-icons/all";

import { Stock } from "../../models";
import { LayoutMain } from "../../layouts";
import {
  Card,
  ModalAddStock,
  ModalEditStock,
  ModalDeleteStock,
} from "../../components";

const PantryView = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [stockList, setStockList] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  const [selectedEditStockID, setSelectedEditStockID] = useState(null);
  const [selectedDeleteStockID, setSelectedDeleteStockID] = useState(null);

  useEffect(() => {
    if (selectedEditStockID || selectedDeleteStockID) {
      const id = selectedEditStockID || selectedDeleteStockID;
      const selected = stockList.find((el) => el.id === id);
      setSelectedStock(selected);
    }
  }, [selectedEditStockID, selectedDeleteStockID]);

  useEffect(() => {
    fetchStock();
    const subscription = DataStore.observe(Stock).subscribe(() => fetchStock());
    return () => {
      subscription.unsubscribe();
      setSelectedStock(null);
    };
  }, []);

  async function fetchStock() {
    const stockList = await DataStore.query(Stock);
    setStockList(stockList ? stockList : []);
  }

  return (
    <>
      {addModalOpen && (
        <ModalAddStock
          open={addModalOpen}
          close={() => setAddModalOpen(false)}
        />
      )}
      {selectedEditStockID && selectedStock && (
        <ModalEditStock
          stockToEdit={selectedStock}
          open={!!selectedEditStockID}
          close={() => {
            setSelectedStock(null);
            setSelectedEditStockID(null);
          }}
          saveChangesText="Update"
        />
      )}
      {selectedDeleteStockID && selectedStock && (
        <ModalDeleteStock
          stockToDelete={selectedStock}
          open={!!selectedDeleteStockID}
          close={() => {
            setSelectedStock(null);
            setSelectedDeleteStockID(null);
          }}
          saveChangesText="Confirm"
        />
      )}
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
              onClick={() => setAddModalOpen(true)}
            >
              <AiOutlinePlus /> Add Stock
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
            {stockList.length > 0 ? (
              stockList.map((el, i) => {
                // @TODO wrap this props into Stock
                return (
                  <Card
                    name={el.name}
                    date={el.createdAt}
                    description={el.description}
                    quantity={el.quantity}
                    key={el.id}
                    img={el.imgName}
                    editStock={() => setSelectedEditStockID(el.id)}
                    deleteStock={() => setSelectedDeleteStockID(el.id)}
                  />
                );
              })
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
