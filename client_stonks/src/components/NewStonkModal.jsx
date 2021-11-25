import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStonkForm from "./NewStonkForm";

const NewStonkModal = (props) => {
  console.log("props", props);
  const stonk = props.stonk
  const stonks = props.stonks;
  const newStonk = props.newStonk; //True 
  const setStonks = props.setStonks;
  const [modal, setModal] = useState(false);
  // const ticker = stonks.ticker
  console.log("stonks", stonks);

  const toggle = () => {
    setModal(!modal);
  };
  // const resetState = props.resetState



  let title = "Edit Stonks";
  let button = <Button onClick={toggle}>Edit</Button>;

  if (newStonk) {
    title = "Add New Stonks";
    button = (
      <Button
        color="primary"
        className="float-right"
        onClick={toggle}
        style={{ minWidth: "200px" }}
      >
        New Stonk
      </Button>
    );
  }


  return (
    <>
      {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <NewStonkForm
            // resetState={resetState}
            toggle={toggle}
            stonk = {stonk}
            stonks={stonks}
          // ticker={ticker}
            setStonks={setStonks}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewStonkModal;
