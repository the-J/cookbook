import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNotif } from "../../context/notifications.context";

const Notification = ({ children }) => {
  const { error, removeNotif } = useNotif();

  useEffect(() => {
    if (error?.message) {
      toast(error.message);
    }

    return () => {
      removeNotif();
    };
  }, [error, removeNotif]);

  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};

export default Notification;
