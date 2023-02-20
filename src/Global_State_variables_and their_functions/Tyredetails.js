import React, { useState } from "react";
import tyredetailsContext from "./TyredetailsContext";
import PocketBase from "pocketbase";

export default function Tyredetails(props) {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [tyre_details, setTyre_details] = useState(null);
  const [select, setSelect] = useState(null)
  const getDetails = async () => {
    const records = await pb
      .collection("tyre_details")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      });
    setTyre_details(records);
  };

  const addDetails=async(name, price)=>{
      const data = {
        "name": `${name}`,
        "price": price
      }
      const record = await pb.collection('tyre_details').create(data);
      getDetails();
  }
  return (
    <>
      <tyredetailsContext.Provider value={{ tyre_details, getDetails, addDetails ,select, setSelect}}>
        {props.children}
      </tyredetailsContext.Provider>
    </>
  );
}
