import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStonkForm from "./NewStonkForm";

const NewStonkModal = (props) => {
  console.log("props", props)
  const stonks = props.stonks
  console.log("stonks", stonks)
  const [modal, setModal] = useState(false);
  const resetState = props.resetState
  const toggle = () => {
    setModal(!modal);
  };
  const newStonk = props.newStonk;

  const button = (
    <Button
      color="primary"
      className="float-right"
      onClick={toggle}
      style={{ minWidth: "200px" }}
    >
      New Stonk
    </Button>
  );

  let title = "Edit Stonks";
  if (newStonk == true) {
    title = "Add New Stonks";
  }

  return (
    <>
      {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <NewStonkForm
            resetState={resetState}
            toggle={toggle}
           stonks={stonks}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewStonkModal;
