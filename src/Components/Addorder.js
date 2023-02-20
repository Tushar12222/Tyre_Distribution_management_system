import React, { useContext, useState } from "react";
import swal from "sweetalert";
import orderContext from "../Global_State_variables_and their_functions/OrderContext";
import Checkboxes from "./Checkboxes";

export default function Addorder() {
  const context1 = useContext(orderContext);
  const { addOrders } = context1;

  const [neworder, setNeworder] = useState({
    name: "",

    quantity: 0,
    dispatched: 0,
  });
  const handleChange = (e) => {
    setNeworder({ ...neworder, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(neworder.select);
    addOrders(
      localStorage.getItem("id"),
      neworder.quantity,
      neworder.dispatched,
      neworder.name
    );
    localStorage.removeItem("id");
    swal("Success!", "Order Added, can be viewed in the table.", "success");
  };
  return (
    <>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
              value={neworder.name}
              aria-describedby="emailHelp"
              required
            />
            <br />
            <label htmlFor="tyre_details" className="form-label my-2">
              Tyre Details
            </label>

            <Checkboxes />

            <br />
            <label htmlFor="quantity" className="form-label my-2">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              className="form-control"
              id="quantity"
              value={neworder.quantity}
              onChange={handleChange}
              aria-describedby="emailHelp"
              required
            />
            <br />
            <label htmlFor="dispatched" className="form-label my-2">
              Dispatched <div className="text-muted">(Optional)</div>
            </label>
            <input
              name="dispatched"
              type="number"
              className="form-control"
              id="dispatched"
              value={neworder.dispatched}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success">
              Add Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
