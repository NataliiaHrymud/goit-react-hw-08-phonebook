import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Spinner } from "react-bootstrap";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        loading={<Spinner animation="border" />}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
