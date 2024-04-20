import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import FormContainer from "./containers/FormContainer";
import TableListContainer from "./containers/TableListContainer";
import { AppContainerProvider } from "./contexts/AppContainer.context";

const App = () => {
   return (
      <AppContainerProvider>
         <div>
            <FormContainer />
            <TableListContainer />
         </div>
      </AppContainerProvider>
   );
};

export default App;
