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
  const resetState = props.resetState
  const stonks = props.stonks;
  const toggle = props.toggle

  const initialState = {
    
    ticker: "",
    name: "",
    numShares: "",
    purchaseDate: "",
  };
  console.log("initialState", initialState);
//object destructuring
  const [{  ticker, name, numShares, purchaseDate }, setState] =
    useState(initialState);

  
  console.log("stonks", stonks);

  // const [pk, setPk] = useState(0)
  // const [ticker, setTicker] = useState("")
  // const [name, setName] = useState("")
  // const [numShares, setNumShares] = useState("")
  // const [purchaseDate, setPurchaseDate] = useState("")

  // useEffect(() => {
  //   if (stonks !== null) {
  //     setPk(stonks.pk);
  //     setTicker(stonks.ticker);
  //     setName(stonks.name);
  //     setNumShares(stonks.numShares);
  //     setPurchaseDate(stonks.purchaseDate);
  //   }
  // });
  // console.log("pk", pk);
  console.log("stonk.length", stonks.length)
  // initialState.pk = (stonks.length + 1)
  // console.log("pk", pk);
  console.log("stonks.ticker", ticker);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("line56", name, value)
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // const onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

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
      resetState()
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
