import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { active } = props;

  const element = useMemo(() => document.createElement("div"), []);
  const modalElement = useMemo(() => document.querySelector("#modal"), []);

  useEffect(() => {
    if (active) {
      modalElement.appendChild(element);
      return () => {
        modalElement.removeChild(element);
      };
    }
  });

  return createPortal(<div className="modal">{props.children}</div>, element);
};

export default Modal;
