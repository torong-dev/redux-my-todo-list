import React from "react";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const App = () => {
  return (
    <Provider store={store}>
      <Router />;
    </Provider>
  );
};

export default App;
