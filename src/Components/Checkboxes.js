import React, { useContext, useEffect } from "react";
import tyredetailsContext from "../Global_State_variables_and their_functions/TyredetailsContext";
import Checkbox from "./Checkbox";

export default function Checkboxes() {
  const context = useContext(tyredetailsContext);
  const { getDetails } = context;
  useEffect(() => {
    getDetails();
  }, []);
  const { tyre_details } = context;
  return (
    <>
      {tyre_details &&
        tyre_details.map((ele) => {
          return <Checkbox key={ele.id} ele={ele} />;
        })}
    </>
  );
}
