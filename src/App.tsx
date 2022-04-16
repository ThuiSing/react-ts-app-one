import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import TheMainLayout from "views/pages/TheMainLayout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TheMainLayout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
