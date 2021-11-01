import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { nanoid } from "nanoid";
import { AiOutlinePlus, BiImageAdd } from "react-icons/all";

import { Stock } from "../../models";
import { LayoutMain } from "../../layouts";
import {
  Card,
  ImageCapture,
  Modal,
  ModalAddStock,
  ModalEditStock,
} from "../../components";
import { useAuthContext } from "../../context/auth/auth.context";
import useUploadPhoto from "../../hooks/useUploadImage";

const PantryView = () => {
  // @TODO create context for this guy
  // useUploadPhoto should be in ImageCapture

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [stock, setStock] = useState([]);
  const [selectedStockID, setSelectedStockID] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    if (selectedStockID) {
      const selected = stock.find((el) => el.id === selectedStockID);
      setSelectedStock(selected);
    }
  }, [selectedStockID]);

  useEffect(() => {
    fetchStock();
    const subscription = DataStore.observe(Stock).subscribe(() => fetchStock());
    return () => {
      subscription.unsubscribe();
      setSelectedStock(null);
    };
  }, []);

  async function fetchStock() {
    const stock = await DataStore.query(Stock);
    setStock(stock ? stock : []);
  }

  return (
    <>
      {
        <ModalAddStock
          open={addModalOpen}
          close={() => setAddModalOpen(false)}
        />
      }
      {selectedStockID && selectedStock && (
        <ModalEditStock
          stock={selectedStock}
          open={!!selectedStockID}
          close={() => setSelectedStockID(null)}
          saveChangesText="Update"
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
              stock.map((el, i) => {
                // @TODO wrap this props into Stock
                return (
                  <Card
                    name={el.name}
                    date={el.createdAt}
                    description={el.description}
                    quantity={el.quantity}
                    key={el.id}
                    img={el.imgName}
                    editStock={() => setSelectedStockID(el.id)}
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
