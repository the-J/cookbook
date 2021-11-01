import React from "react";
import { DataStore } from "@aws-amplify/datastore";

import { Modal } from "../../components/index";
import { useNotif } from "../../context/notif/notifications.context";

const ModalDeleteStock = ({ stockToDelete, open, close }) => {
  const { pushNotif } = useNotif();

  const deleteStock = async () => {
    try {
      await DataStore.delete(stockToDelete);
      close();
    } catch (error) {
      pushNotif(error.message, "err");
    }
  };

  return (
    <Modal
      title={`Delete "${stockToDelete.name}"?`}
      openState={open}
      closeModal={() => close()}
      saveChanges={() => deleteStock()}
      saveChangesText="Confirm"
      buttonClasses="is-danger"
      validationCondition={true}
    >
      <h4 style={{ color: "red" }}>This operation is irreversible</h4>
    </Modal>
  );
};

export default ModalDeleteStock;
