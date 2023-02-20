import React, { useContext } from "react";
import swal from "sweetalert";
import orderContext from "../Global_State_variables_and their_functions/OrderContext";

export default function Deleteentry(props) {
  const context = useContext(orderContext);
  const {deleteOrders} = context;
  const handleDelete=()=>{
    deleteOrders(props.id);
    swal("Success!","Record Deleted.","success");
    
  }
  return (
    <>
      <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
