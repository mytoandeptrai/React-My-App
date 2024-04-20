import React from "react";
import { useAppContext } from "../contexts/AppContainer.context";

const Pagination = () => {
   const appContext = useAppContext();
   const { pagination, onPageChange, onLimitChange } = appContext;

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
