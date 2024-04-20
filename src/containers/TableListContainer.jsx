import React from "react";
import TableContainer from "./TableContainer";
import Pagination from "../components/Pagination";
import { useAppContext } from "../contexts/AppContainer.context";
import { Spinner } from "reactstrap";

const TableListContainer = () => {
   const appContext = useAppContext();
   const { isLoading } = appContext;

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
