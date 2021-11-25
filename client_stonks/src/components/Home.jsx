import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import { useQuery, useQueryClient, QueryClient } from "react-query";
import StonkList from "./StonkList";
import NewStonkModal from "./NewStonkModal";

const Home = () => {
  const [stonks, setStonks] = useState();
  useEffect(() => {
    const fetchStonk = async () => {
      const response = await axios.get(API_URL);
      const stonksFromData = await response.data;
      setStonks(stonksFromData);
    };
    fetchStonk();
  }, []);

  console.log("useState stonks", stonks);
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
          <StonkList 
          stonks={stonks} setStonks={setStonks}
          // resetState={fetchStonk} 
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewStonkModal
            newStonk={true}
            // resetState={fetchStonk}
            stonks={stonks}
            setStonks={setStonks}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
