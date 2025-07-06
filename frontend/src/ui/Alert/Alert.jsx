import React, { useState, useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";
import clsx from "clsx";
import closeImg from "../../assets/close.svg";

const Alert = ({ title, p1, p2, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);

      const timer = setTimeout(() => {
        setIsClosing(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleTransitionEnd = (e) => {
    console.log("Transition ended on", e.target, e.propertyName);
    if (isClosing) {
      onClose();
    }
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <RemoveScroll>
      <div
        onClick={handleOverlayClick}
        onTransitionEnd={handleTransitionEnd}
        className={clsx(
          "fixed top-0 bottom-0 left-0 right-0 bg-[rgba(40,40,40,0.5)] backdrop-blur-sm flex justify-center items-start z-100",
          "transition-all duration-500 ease-in-out",
          {
            "opacity-0 pointer-events-none": isClosing,
            "opacity-100 pointer-events-auto": !isClosing,
          }
        )}
        style={{ transitionProperty: "opacity" }}
      >
        <div
          className={clsx(
            "flex gap-4 max-w-[550px] h-max bg-main-blue text-main-white p-4 md:p-8 m-4 rounded-xl mt-[20vh]",
            "transform transition-transform duration-500 ease-in-out",
            {
              "-translate-y-10": isClosing,
              "translate-y-0": !isClosing,
            }
          )}
        >
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-2xl md:text-[40px]">{title}</h3>
            <p>{p1}</p>
            {p2 && <p>{p2}</p>}
          </div>
          <div>
            <button
              className="cursor-pointer bg-main-blue hover:bg-main-black rounded-full w-6 md:w-11 transition-colors outline-none"
              onClick={handleClose}
              aria-label="Close alert"
            >
              <img src={closeImg} alt="close" />
            </button>
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default Alert;
