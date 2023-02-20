import React from "react";

import Deleteentry from "./Deleteentry";
import Dropdown from "./Dropdown";

export default function Rows(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.index}</th>
        <td>{props.ele.name.toUpperCase()} </td>
        <td>
          {props.ele.expand.tyre_details.name} ,{" "}
          {props.ele.expand.tyre_details.price}
        </td>
        <td>{props.ele.quantity} </td>
        <td>{props.ele.dispatched}</td>
        <td>{props.ele.quantity - props.ele.dispatched}</td>
        <td>{props.ele.expand.tyre_details.price * props.ele.quantity}</td>
        <td>
          <div className="d-flex justify-content-center">
            {<Dropdown ele={props.ele} />}
            {<Deleteentry id={props.ele.id}/>}
          </div>
        </td>
      </tr>
    </>
  );
}
