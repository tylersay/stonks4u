import React from "react";
import { Table } from "reactstrap";
import NewStonkModal from "./NewStonkModal";
import RemoveModal from "./RemoveModal";

const StonkList = (props) => {
  const stonks = props.stonks;
  const setStonk = props.setStonk
  console.log(stonks);
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
            <tr key={stonk.pk}>
              <td>{stonk.ticker}</td>
              <td>{stonk.name}</td>
              <td>{stonk.numShares}</td>
              <td>{stonk.purchaseDate}</td>

              <td align="center">
                <NewStonkModal
                    create={false}
                    stonk={stonk}
                  //  resetState={props.resetState}
                  />
                &nbsp;&nbsp;
                <RemoveModal
                    pk={stonk.pk}
                    setStonk={setStonk}
                  //  resetState={props.resetState}
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
