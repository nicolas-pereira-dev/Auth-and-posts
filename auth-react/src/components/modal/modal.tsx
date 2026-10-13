import { createPortal } from "react-dom";
import MessageBox from "../message-box/message-box";
import { useEffect } from "react";
import { ModalInfo } from "../../models/ModalInfo";

function Modal(props: { info: ModalInfo, handleClose: () => void, hideAfter?: number}) {

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if(props.hideAfter){
       timer = setTimeout(props.handleClose, props.hideAfter * 1000);
    }
    return () => timer && clearTimeout(timer);
  }, [props.hideAfter]);
  
  return (
    createPortal(
        <MessageBox
          title={props.info.title}
          description={props.info.description}
          level={props.info.level}
          handleClose={props.handleClose} />,
      document.getElementById('modal-root') as HTMLElement
    )
  );
}

export default Modal;