import React from "react";
import { useDispatch } from "react-redux";

const ButtonAddTodo = () => {
   const dispatch = useDispatch();

   const onAddTodo = () => {
      const action = {
         type: "ADD_TODO",
         payload: {
            id: Math.random(),
            name: `Trieu - ${Math.random()}`,
         },
      };

      dispatch(action);
   };
   return <button onClick={onAddTodo}>Add todo</button>;
};

export default ButtonAddTodo;
