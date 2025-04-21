import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getTableApi } from "./api/tableApi";
import FormContainer from "./containers/FormContainer";
import TableListContainer from "./containers/TableListContainer";
import axios from "axios";

const App = () => {
   const dispatch = useDispatch();
   const filters = useSelector((state) => state.tableState.filters);

   useEffect(() => {
      dispatch(getTableApi(filters));
   }, [dispatch, filters]);

   const onClickIP = async () => {
      try {
         await axios.get('https://nestjs-rate-limit.onrender.com/api/ip')
      } catch (error) {
         console.log('error', error)
      }
   }

   const onClickIP2 = async () => {
      try {
         await axios.post('https://nestjs-rate-limit.onrender.com/api/ip2', {})
      } catch (error) {
         console.log('error ip2', error)
      }
   }

   return (
      <>
         <div>
            <button onClick={onClickIP}>IP</button>
            <button onClick={onClickIP2}>IP2</button>
            <FormContainer />
            <TableListContainer />
         </div>
      </>
   );
};

export default App;
