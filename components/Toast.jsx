import React, { useState, useEffect } from "react";
import error from '../src/assets/Icon.svg'
const Toast = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration / 1000);
  const Style = {
    position: "fixed",
    top: "10px",
    left: "50%",
    fontSize:"1.25rem",
    fontWeight:"bold",
  transform: "translateX(-50%)",
    background: "#FEF2F2",
    color: "",
    padding: "20px",
    width:"300px",
    // border:"1px solid #92400E",
    boxShadow: "rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset",
    borderRadius: "5px",
    zIndex: "1",

  };
  useEffect(() => {
    if (!message) return;

    setIsVisible(true);
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft <= 1) {
          clearInterval(intervalId);
          setIsVisible(false);
          return 0;
        }
        return timeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [message, duration]);

  if (!isVisible) return null;

  return (
    <div style={Style}>
     
      {message}
    </div>
  );
};

export default Toast;
