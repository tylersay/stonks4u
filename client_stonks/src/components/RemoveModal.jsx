import React, { useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const RemoveModal = (props) => {
  const [modal, setModal] = useState(false);
  const setStonk = props.setStonk;
  const toggle = () => {
    setModal(!modal);
  };

  const deleteStonk = (pk) => {
    console.log("pk", pk)
    axios.delete(API_URL + pk).then(() => {
      setStonk(stonks.filter((pk) => stonk.pk !== pk));
      toggle();
    });
  };

  return (
    <>
      <Button color="danger" onClick={() => toggle()}>
        Remove
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Confirm Delete?
        </ModalHeader>
        <ModalFooter>
          <Button type="button" onClick={() => toggle()}>Cancel</Button>
          <Button 
          type="button"
          color="primary"
          onClick={() => deleteStonk(props.pk)}>Yes</Button>
        </ModalFooter>

      </Modal>
    </>
  );
};

export default RemoveModal;
