import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStonkForm from "./NewStonkModal";
import EditStonkForm from "./EditStonkForm";

const EditStonkModal = (props) => {
  const stonks = props.stonks
  const setStonks = props.setStonks
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  let button = <Button onClick={toggle}>Edit</Button>;
  let title = "Edit Stonks";
  return (
    <>
    {button}
          <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <EditStonkForm
            // resetState={resetState}
            toggle={toggle}
            stonks={stonks}
          // ticker={ticker}
            setStonks={setStonks}
          />
        </ModalBody>
      </Modal>
      
    </>
  )
}

export default EditStonkModal
