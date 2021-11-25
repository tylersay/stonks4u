import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  NavbarToggler,
} from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const NewStonkForm = (props) => {
  console.log("props", props);
  // const fetchAgain = () => props.resetState
  // console.log('props.resetState', props.resetState)
  const stonks = props.stonks;
  const toggle = props.toggle
  const setStonks = props.setStonks

  const initialState = {
    pk: 0,
    ticker: "",
    name: "",
    numShares: "",
    purchaseDate: "",
  };

  console.log("initialState", initialState);
//object destructuring
  const [{ pk, ticker, name, numShares, purchaseDate }, setState] =
    useState(initialState);

  
  console.log("stonks", stonks);


  

  console.log("stonks.ticker", ticker);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("line56", name, value)
    setState((prevState) => ({ ...prevState, [name]: value }));
  };



  const editStonk = (event) => {
    event.preventDefault();
    axios.put(API_URL, {name, ticker, numShares, purchaseDate})
    .then(() => {
      resetState();
      toggle()
    })
  }

  const createStonk = (event) => {
    event.preventDefault();
    axios.post(API_URL, {name, ticker, numShares, purchaseDate})
    .then(() => {
      // setStonks((stonks) => [...prevState , stonks])
      toggle()
    })
  }

  const defaultIfEmpty = (value) => {
    return value === ""?"" : value
  }

  return (
    <Form onSubmit={() => createStonk(event) }>
      <FormGroup>
        <Label for="ticker">Ticker:</Label>
        <Input
          type="text"
          name="ticker"
          onChange={onChange}
          value={defaultIfEmpty(ticker)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          onChange={onChange}
          value={defaultIfEmpty(name)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="numShares">Shares:</Label>
        <Input
          type="text"
          name="numShares"
          onChange={onChange}
          value={defaultIfEmpty(numShares)}
        />
      </FormGroup>
      <Button>Send</Button>
    </Form>
  );
};

export default NewStonkForm;
