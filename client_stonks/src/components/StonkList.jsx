import React from "react";
import { Table } from "reactstrap";
import NewStonkModal from "./NewStonkModal";
import RemoveModal from "./RemoveModal";
import EditStonkModal from "./EditStonkModal";

const StonkList = (props) => {
  // console.log("stonkList props", props)  //// yes props 
  const stonks = props.stonks;
  const setStonks = props.setStonks
  console.log("stonkList stonks", stonks);
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Name</th>
          <th>Shares</th>
          <th>Purchased</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!stonks || stonks.length <= 0 ? (
          <tr>
            <td colSpan="6" align="center">
              <b>Ops, no stonks here yet</b>
            </td>
          </tr>
        ) : (
          stonks.map((stonk) => (
            <tr key={stonk.id}>
              <td>{stonk.ticker}</td>
              <td>{stonk.name}</td>
              <td>{stonk.numShares}</td>
              <td>{stonk.purchaseDate}</td>

              <td align="center">
                <NewStonkModal
                    newStonk={false}
                    stonk={stonk}
                    setStonks={setStonks}
                  
                  />
                &nbsp;&nbsp;
                <RemoveModal
                    id={stonk.id}
                    setStonks={setStonks}
                    stonks={stonks}
                  
                  />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default StonkList;
