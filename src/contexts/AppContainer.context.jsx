import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";

export const useAppContext = () => {
   return React.useContext(AppContainerContext);
};

export const AppContainerProvider = ({ children }) => {
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
      setIsLoading(true);

      const getApi = async () => {
         try {
            const url = `https://api.slingacademy.com/v1/sample-data/users?${queryString.stringify(
               filters
            )}`;

            const response = await axios.get(url);
            const data = response.data;

            setPagination({
               limit: data.limit,
               offset: data.offset,
               total_users: data.total_users,
            });
            setDataList(data.users);
            setIsLoading(false);
         } catch (error) {
            setDataList([]);
            setIsLoading(false);
         }
      };

      getApi();
   }, [filters]);

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
