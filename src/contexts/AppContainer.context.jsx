import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTableApi } from "../api/tableApi";

export const useAppContext = () => {
   return React.useContext(AppContainerContext);
};

export const AppContainerProvider = ({ children }) => {
   const dispatch = useDispatch();
   const [dataList, setDataList] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [editInfoData, setEditInfoData] = useState(null);
   const [pagination, setPagination] = useState({
      total_users: 100,
      offset: 1,
      limit: 10,
   });

   const [filters, setFilters] = useState({
      offset: 1,
      limit: 5,
   });

   useEffect(() => {
      dispatch(getTableApi(filters));
   }, [dispatch, filters]);

   const onSubmitData = (data) => {
      setDataList([...dataList, data]);
   };

   const onUpdateData = (data) => {
      const newData = dataList.map((item) => {
         if (item.id === data.id) {
            return data;
         }

         return item;
      });
      setDataList(newData);
      setEditInfoData(null);
   };

   const onEditChange = (editInfo) => {
      setEditInfoData(editInfo);
   };

   const onPageChange = (newPage) => {
      setFilters({
         ...filters,
         offset: newPage,
      });
   };

   const onLimitChange = (newLimit) => {
      setFilters({
         offset: 1,
         limit: newLimit,
      });
   };

   const contextValue = {
      dataList,
      setDataList,
      isLoading,
      setIsLoading,
      editInfoData,
      setEditInfoData,
      pagination,
      setPagination,
      filters,
      setFilters,
      onSubmitData,
      onUpdateData,
      onEditChange,
      onPageChange,
      onLimitChange,
   };

   return (
      <AppContainerContext.Provider value={contextValue}>
         {children}
      </AppContainerContext.Provider>
   );
};

export const AppContainerContext = React.createContext();
