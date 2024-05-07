import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux-toolkit/slice/tableSlice";

const Pagination = () => {
   const dispatch = useDispatch();
   const { pagination, filters } = useSelector((state) => state.tableState);

   const onPageChange = (newPage) => {
      const payload = {
         ...filters,
         offset: newPage,
      };
      dispatch(setFilter(payload));
   };

   const onLimitChange = (newLimit) => {
      const payload = {
         offset: 1,
         limit: newLimit,
      };

      dispatch(setFilter(payload));
   };

   const { total_users, offset, limit } = pagination;
   const lastPage = Math.ceil(total_users / limit);

   const onPreviousPageChange = () => {
      onPageChange(offset - 1);
   };

   const onNextPageChange = () => {
      onPageChange(offset + 1);
   };

   const onSelectChange = (e) => {
      onLimitChange(e.target.value);
   };

   return (
      <div>
         <button
            disabled={offset <= 1}
            onClick={onPreviousPageChange}
         >
            Prev
         </button>
         <button
            disabled={offset === lastPage}
            onClick={onNextPageChange}
         >
            Next
         </button>
         <select
            value={pagination.limit}
            onChange={onSelectChange}
         >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
         </select>
      </div>
   );
};

export default Pagination;
