import React, { useContext, useEffect } from "react";

import orderContext from "../Global_State_variables_and their_functions/OrderContext";
import Rows from "./Rows";
export default function Table() {
  let count = 1;
  let totalQuan = 0;
  let totalDis = 0;
  let totalPen = 0;
  let total = 0;

  const context = useContext(orderContext);
  const { orders, getOrders } = context;
  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <table
        style={{ letterSpacing: "3px" }}
        className="table font-monospace text-center table-dark table-striped"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Tyre_Details</th>
            <th scope="col">Quantity</th>
            <th scope="col">Dispatched</th>
            <th scope="col">Pending</th>
            <th scope="col">Sub-Total(Rs.)</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((ele, i) => {
              totalQuan += ele.quantity;
              totalDis += ele.dispatched;
              totalPen += ele.quantity - ele.dispatched;
              total += ele.expand.tyre_details.price * ele.quantity;

              return <Rows key={ele.id} ele={ele} index={count++} />;
            })}
          <tr>
            <th scope="row"></th>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Total:</td>
            <td>NA</td>
            <td>{totalQuan}</td>
            <td>{totalDis}</td>
            <td>{totalPen}</td>
            <td>{total}</td>
            <td>NA</td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </>
  );
}
