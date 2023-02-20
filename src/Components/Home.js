import React from "react";
import Table from "./Table";

export default function Home() {
  return (
    <>
      <div className="container my-3">
        <b>DASHBOARD</b>
      </div>
      <div className="container">
        <Table/>
      </div>
    </>
  );
}
