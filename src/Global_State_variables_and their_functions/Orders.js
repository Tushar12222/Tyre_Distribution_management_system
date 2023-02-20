import { useState } from "react";
import PocketBase from "pocketbase";
import React from "react";
import orderContext from "./OrderContext";

export default function Orders(props) {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const [orders, setOrders] = useState();
  const getOrders = async () => {
    const records = await fetch(
      "http://127.0.0.1:8090/api/collections/orders/records?expand=tyre_details"
    );
    const json = await records.json();

    const uni = Array.from(new Set(json.items));

    setOrders(uni);
  };
  
  const editOrders=async(id, tyre_details, quantity, dispatched, name)=>{
    const data={
      "tyre_details": tyre_details,
      "quantity": quantity,
      "dispatched": dispatched,
      "name": name
    }

    const record = await pb.collection('orders').update(`${id}`, data);
    getOrders();
  }

  const deleteOrders=async(id)=>{
    await pb.collection('orders').delete(`${id}`);
    getOrders();
  }

  const addOrders=async(id, quantity, dispatched, name)=>{
    const data = {
      "tyre_details": id,
      "quantity": quantity,
      "dispatched": dispatched,
      "name": name,
    }
    const record = await pb.collection('orders').create(data);
    getOrders();
  }

  return (
    <orderContext.Provider value={{ orders, getOrders, editOrders, deleteOrders, addOrders }}>
      {props.children}
    </orderContext.Provider>
  );
}
