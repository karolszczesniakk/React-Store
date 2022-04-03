import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
  onClick: () => void;
}

interface ModalProps {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay: React.FC = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
