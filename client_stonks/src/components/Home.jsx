import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import { useQuery, useQueryClient, QueryClient } from "react-query";
import StonkList from "./StonkList";
import NewStonkModal from "./NewStonkModal";

const fetchStonk = async () => {
  const response = await axios.get("http://localhost:8000/api/stonks/");
  console.log("response", response);
  const stonks = response.data;
  console.log("response.stonks", stonks);
  
  return stonks;
};

const Home = () => {
  const query = useQuery("stonks", fetchStonk);
  console.log("query stonks", query)
  const stonks = query.data
  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  // if (status === "error") {
  //   return <span>Error: {error.message}</span>;
  // }

  // console.log("stonks", stonks);
  
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <StonkList stonks={stonks} resetState={fetchStonk} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewStonkModal
            newStonk={true}
            resetState={fetchStonk}
            stonks={stonks}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
