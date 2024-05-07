import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { SET_EDIT_INFO } from "../stores/actions/tableActions";
import { setEditInfo } from "../redux-toolkit/slice/tableSlice";

const TableContainer = () => {
   const dispatch = useDispatch();
   const dataList = useSelector((state) => state.tableState.dataList);

   const onEditChange = (editInfo) => {
      dispatch(setEditInfo(editInfo));
   };

   return (
      <Table hover>
         <thead>
            <tr>
               <th>#</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Phone Number</th>
               <th>Street</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {dataList.map((data, index) => (
               <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.street}</td>
                  <td>
                     <Button onClick={() => onEditChange(data)}>Edit</Button>
                  </td>
               </tr>
            ))}
         </tbody>
      </Table>
   );
};

export default TableContainer;
