import React, { useEffect, useState } from "react";
import { db } from "../config/Firebase-config";
import { collection, getDocs } from "firebase/firestore";
import RobotAnimate from "./Robot";
const TableData = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filterData = data?.docs?.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUsers(filterData);
      } catch (e) {
        alert(e);
      }
    };
    getUsers();
  }, []);
  const ths = (
    <tr className="">
      <th className="text-white px-[30px] py-3">No</th>
      <th className="text-white w-[300px] py-3">Name</th>
      <th className="text-white w-[300px] py-3">Email</th>
      <th className="text-white w-[300px] py-3">PhoneNumber</th>
      <th className="text-white w-[300px] py-3">Address</th>
    </tr>
  );
  const rows = users.map((element, index) => (
    <tr className="hover:bg-[#2a2a2a]" key={element.id}>
      <td className="border-y-[1px]  border-white py-3">{index + 1}</td>
      <td className="border-y-[1px] border-white py-3 capitalize">
        {element.name}
      </td>
      <td className="border-y-[1px] border-white py-3">{element.email}</td>
      <td className="border-y-[1px] border-white py-3">
        {element.phoneNumber}
      </td>
      <td className="border-y-[1px] border-white py-3">{element.address}</td>
    </tr>
  ));
  if (users.length > 1) {
    return (
      <div className="md:ms-[100px] ms-0 flex-col items-center flex justify-center">
        <h2 className="text-3xl py-2 mb-3 text-white text-sans font-bold">
          Users Data
        </h2>

        <table>
          <thead>{ths}</thead>
          <tbody className="text-[#b1b1b1]  text-center">{rows}</tbody>
        </table>
      </div>
    );
  }

  if (users.length == 0) {
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <div className="flex justify-between flex-wrap items-center">
          <div className="w-[300px] mx-auto">
            <RobotAnimate />
          </div>
          <h2 className="text-3xl md:ms-[50px] text-center font-bold text-red-600">
            You don't have permission to access this page
          </h2>
        </div>
      </div>
    );
  }
};

export default TableData;
