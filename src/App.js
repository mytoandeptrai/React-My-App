import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getTableApi } from "./api/tableApi";
import FormContainer from "./containers/FormContainer";
import TableListContainer from "./containers/TableListContainer";

const App = () => {
   const dispatch = useDispatch();
   const filters = useSelector((state) => state.tableState.filters);

   useEffect(() => {
      dispatch(getTableApi(filters));
   }, [dispatch, filters]);

   return (
      <>
         <div>
            <FormContainer />
            <TableListContainer />
         </div>
      </>
   );
};

export default App;
