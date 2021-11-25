import React, { useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const RemoveModal = (props) => {



  const [modal, setModal] = useState(false);
  console.log("removeModal props", props)
  const setStonks = props.setStonks;
  const stonks = props.stonks
  console.log("removeModal stonks", stonks)
  const toggle = () => {
    setModal(!modal);
  };

  // const getStonks = async () => {
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   setStonks(data);
  // };

  // const deleteStonk = async (stonks) => {
  //   // console.log("pk", pk)
  //   await axios.delete(API_URL + stonks.pk).then(() => {
      
  //     toggle();
  //   });
  // };

  const deleteStonk = async (id) => {
    console.log("id", props.id)
    await axios.delete(API_URL + props.id).then(() => {
     const stonks = stonks.filter((id) => stonks.id !== id)
      setStonks(stonks);
      // getStonks()
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
          onClick={() => deleteStonk(stonks)}>Yes</Button>
        </ModalFooter>

      </Modal>
    </>
  );
};

export default RemoveModal;
