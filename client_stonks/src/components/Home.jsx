import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import {API_URL} from '../constants'
import { useQuery, useQueryClient, QueryClient } from "react-query";
import StonkList from './StonkList';
import NewStonkModal from './NewStonkModal';

const Home = () => {
  const [stonks, setStonks] = useState([])


  useEffect(() => {
    const fetchStonk = async () => {
      const response = await axios.get("http://localhost:8000/api/stonks/")
      console.log("response", response)
      const stonksData = response.data
      console.log("response.data", response.data)
      setStonks(stonksData)
      
    }
    fetchStonk();
  }, [])
    


  
const resetState = () => fetchStonk()

console.log("stonks", stonks)

  return (
    <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StonkList
              stonks={stonks}
              resetState={resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStonkModal newStonk={true} resetState={resetState} stonks={stonks}/>
          </Col>
        </Row>
      </Container>
  )
}

export default Home
