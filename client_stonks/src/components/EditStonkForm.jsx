import React from 'react'
import { API_URL } from '../constants'

const EditStonkForm = (props) => {
 const [stonks, setStonks] = useState([])

 const nullStonk = {
  ticker: "",
  name: "",
  numShares:"",
  purchaseDate:"",
};
const [target, setTarget] = useState(nullStonk)

const getStonks = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  setPosts(data);
};

const getTargetStonk = (stonk) => {
  setTargetStonk(stonk)
}



  return (
    <div>
      
    </div>
  )
}

export default EditStonkForm
