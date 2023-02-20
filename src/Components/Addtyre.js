import React, { useContext, useState } from "react";
import swal from "sweetalert";
import tyredetailsContext from "../Global_State_variables_and their_functions/TyredetailsContext";

export default function Addtyre() {
  const context = useContext(tyredetailsContext);
  const { addDetails } = context;
  const [tyre, setTyre] = useState({
    name: "",
    price: 0,
  });
  const handleChange = (e) => {
    setTyre({ ...tyre, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addDetails(tyre.name, tyre.price);
    swal("Success!", "Tyre Record Added.", "success");
  };
  return (
    <>
      <br />
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3 my-3">
          <label htmlFor="name" className="form-label">
            Name of the tyre
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            value={tyre.name}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
          <br />
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="price"
            value={tyre.price}
            onChange={handleChange}
            min={100}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">
            Add Tyre
          </button>
        </div>
      </form>
    </>
  );
}
