import React, { createContext, useState } from "react";

const SnackContext = createContext();

const SnackProvider = ({ children }) => {
  const [snackShow, setSnackShow] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [snackId, setSnackId] = useState(null);

  const handleSnackBar = (productId, message) => {
    setSnackShow(true);
    setSnackId(productId);
    setShowMessage(message);
    setTimeout(() => {
      setSnackId(productId);
      setSnackShow(false);
    }, 3000);
  };

  return (
    <SnackContext.Provider
      value={{ snackShow, handleSnackBar, showMessage, snackId }}
    >
      {children}
    </SnackContext.Provider>
  );
};

export { SnackContext, SnackProvider };
