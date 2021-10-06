import React, { useEffect } from "react";
import { useAuthContext } from "../../context/auth.context";

const TempView = () => {
  const auth = useAuthContext();

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return <div>TempView</div>;
};

export default TempView;
