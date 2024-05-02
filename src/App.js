import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import FormContainer from "./containers/FormContainer";
import TableListContainer from "./containers/TableListContainer";
import { AppContainerProvider } from "./contexts/AppContainer.context";
import FormFormikContainer from "./containers/FormFormikContainer";

const App = () => {
   return (
      <AppContainerProvider>
         <div>
            <FormContainer />
            {/* <TableListContainer /> */}
            {/* <FormFormikContainer /> */}
         </div>
      </AppContainerProvider>
   );
};

export default App;

