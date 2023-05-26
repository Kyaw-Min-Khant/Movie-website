import React from "react";
import Left from "../Explore/Left";
import Menu from "../Component/Menu";

import TableData from "./Table";

const AdminData = () => {
  return (
    <div className="min-h-screen bg-[#151515] relative">
      <Left />
      <Menu />
      <TableData />
    </div>
  );
};

export default AdminData;
