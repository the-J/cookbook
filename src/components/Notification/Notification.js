import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNotif } from "../../context/notif/notifications.context";

const Notification = ({ children }) => {
  const { message, removeNotif } = useNotif();

  useEffect(() => {
    if (message?.message && message?.status) {
      switch (message.status) {
        case "err":
          toast.error(message.message);
          break;
        default:
          toast.info(message.message);
          break;
      }
    }

    return () => {
      removeNotif();
    };
  }, [message, removeNotif]);

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
