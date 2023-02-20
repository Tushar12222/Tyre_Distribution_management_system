import React, { useContext, useState } from "react";
import swal from "sweetalert";
import orderContext from "../Global_State_variables_and their_functions/OrderContext";


export default function Dropdown(props) {
  const context = useContext(orderContext);
  const {editOrders} = context;
  const [orders, setOrders] = useState({
    name: props.ele.name,
    quantity: props.ele.quantity,
    dispatched: props.ele.dispatched,
  });
  const handleChange = (e) => {
    setOrders({ ...orders, [e.target.name]: e.target.value });
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    editOrders(props.ele.id, props.ele.tyre_details, orders.quantity, orders.dispatched, orders.name);
    swal("Success!","Record Updated.","success");
  }
  return (
    <>
    {console.log(props.ele)}
      <div className="dropdown mx-2">
        <button
          className="btn  btn-outline-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Update
        </button>
        <div className="dropdown-menu ">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mx-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                value={orders.name.toUpperCase()}
                onChange={handleChange}
                required
              />
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                name="quantity"
                type="number"
                className="form-control"
                id="quantity"
                aria-describedby="emailHelp"
                value={orders.quantity}
                onChange={handleChange}
                min="1"
                required
              />
              <label htmlFor="dispatched" className="form-label">
                Dispatched
              </label>
              <input
                name="dispatched"
                type="number"
                className="form-control"
                id="dispatched"
                aria-describedby="emailHelp"
                value={orders.dispatched}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
