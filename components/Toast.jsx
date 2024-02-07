import React, { useState, useEffect } from "react";
import error from '../src/assets/Icon.svg'
const Toast = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration / 1000);
  const Style = {
    position: "fixed",
    top: "10px",
    right: "35%",
    background: "#FEF2F2",
    color: "",
    padding: "20px",
    width:"300px",
    border:"1px solid #92400E",
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
