import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { LayoutMain } from "../../layouts";
import { AddStock, Card, Modal } from "../../components";

const PantryView = () => {
  const [openModalState, setOpenModalState] = useState(false);
  return (
    <>
      <Modal
        title="Add New Stock"
        openState={openModalState}
        closeModal={() => setOpenModalState(false)}
        saveChanges={() => {}}
        content={<AddStock />}
      />
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
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (el, i) => (
                <Card name={"name " + i} key={i} />
              )
            )}
          </div>
        </div>
      </LayoutMain>
    </>
  );
};

export default PantryView;
