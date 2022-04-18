import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persisStore } from "redux/store";
import TheMainLayout from "views/pages/TheMainLayout";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisStore}>
        <BrowserRouter>
          <TheMainLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
