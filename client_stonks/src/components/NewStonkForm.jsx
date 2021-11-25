import React, { useState, useEffect } from "react";
import {Button, Form, FormGroup, Input, Label, NavbarToggler,} from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const NewStonkForm = (props) => {
  console.log("props", props);
  const setStonks = props.setStonks
  const stonk = props.stonk
  // const fetchAgain = () => props.resetState
  // console.log('props.resetState', props.resetState)
  const stonks = props.stonks;
  const id = stonk.id
  
  console.log("stonks", stonks);
  console.log("stonk", stonk);
  const toggle = props.toggle
  

  const [form, setForm] = useState({
    //pk: 0,
    ticker: "",
    name: "",
    numShares: "",
    purchaseDate: "",
  })

  // const [singleStonk, setSingleStonk] = useState({
  //   ticker : stonk.ticker,
  //   name : stonk.name,
  //   numShares : stonk.numShares,
  //   purchaseDate : stonk.purchaseDate
  // })


  console.log("form", form);
//object destructuring
  // const [{ pk, ticker, name, numShares, purchaseDate }, setState] =
  //   useState(initialState);

  const ticker = stonk.ticker
  const numShares = stonk.numShares
  const name = stonk.name
  const purchaseDate = stonk.purchaseDate
  console.log("stonks.ticker", ticker);

  const onChange = (e) => {
    // const { name, value } = e.target;
    const {name, ticker, numShares} = e.target
    // console.log("line56", name, value)
    // setState((prevState) => ({ ...prevState, [name]: value }));
    setForm({...form, 
      [name]: e.target.value,
      [ticker]: e.target.value,
      [numShares]: e.target.value,
     // [purchaseDate]: (new Date().toLocaleString() + '')
    
    })

    // setSingleStonk({...singleStonk,
    //   [name]: e.target.value,
    //   [ticker]: e.target.value,
    //   [numShares]: e.target.value,
    //   [purchaseDate]:e.target.value})
  };
  


  const editStonk = (event) => {
    //event.preventDefault();
    axios.put(API_URL+id + "/", form)
    .then(() => {
      // resetState();
      toggle()
    })
  }

  const createStonk = (event) => {
    event.preventDefault();
    axios.post(API_URL, form)
    .then(() => {
      
      setStonks((stonks) => [...stonks , form])
      toggle()
    })
  }

  const defaultIfEmpty = (value) => {
    return value === ""?"" : value
  }

  return (
    <Form onSubmit={() => stonk ? editStonk(event) : createStonk(event)  }>
      <FormGroup>
        <Label for="ticker">Ticker:</Label>
        <Input
          type="text"
          name="ticker"
          onChange={onChange}
          value={defaultIfEmpty(form.ticker)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          onChange={onChange}
          value={defaultIfEmpty(form.name)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="numShares">Shares:</Label>
        <Input
          type="text"
          name="numShares"
          onChange={onChange}
          value={defaultIfEmpty(form.numShares)}
        />
      </FormGroup>
      
      <Button>Send</Button>
    </Form>
  );
};

export default NewStonkForm;
