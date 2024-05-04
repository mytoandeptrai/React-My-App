import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import Pagination from "../components/Pagination";
import TableContainer from "./TableContainer";

const TableListContainer = () => {
   const isLoading = useSelector((state) => state.tableState.isLoading);

   if (isLoading) {
      return <Spinner>Loading...</Spinner>;
   }

   return (
      <div>
         <TableContainer />
         <Pagination />
      </div>
   );
};

export default TableListContainer;
