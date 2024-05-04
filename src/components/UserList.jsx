import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
   const { users, loading } = useSelector((state) => state.userState);

   if (loading) {
      return <div>...Loading</div>;
   }

   return (
      <div>
         <h1>Users</h1>
         <ul>
            {users.map((user) => (
               <li
                  key={user.id}
                  style={{ display: "flex", gap: "0 30px", marginTop: "10px" }}
               >
                  <p>{user.email}</p>
                  <p>{user.name}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default UserList;
