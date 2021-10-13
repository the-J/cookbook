import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useError } from "../../context/error.context";

const Notification = ({ children }) => {
  const { error, removeError } = useError();

  useEffect(() => {
    if (error?.message) {
      toast(error.message);
    }
    console.log("notification", error?.message);

    return () => {
      removeError();
    };
  }, [error?.message]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default Notification;
