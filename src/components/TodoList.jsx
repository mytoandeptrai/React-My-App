import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
   const data = useSelector((abc) => abc.todoState.data);
   const counter = useSelector((state) => state.counterState.counter);
   const dispatch = useDispatch();

   const onDelete = (id) => {
      const action = {
         type: "REMOVE_TODO",
         payload: id,
      };

      dispatch(action);
   };

   const onAddCounterToName = (id, counter) => {
      const payload = {
         id: id,
         counter: counter,
      };

      const action = {
         type: "ADD_COUNTER_TO_NAME",
         payload: payload,
      };

      dispatch(action);
   };

   return (
      <div>
         <h1>Ten</h1>
         <ul>
            {data.map((todo) => (
               <li
                  key={todo.id}
                  style={{ display: "flex", gap: "0 30px", marginTop: "10px" }}
               >
                  <p>{todo.name}</p>
                  <button onClick={() => onDelete(todo.id)}>Delete</button>
                  <button onClick={() => onAddCounterToName(todo.id, counter)}>
                     Add counter to name
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TodoList;
