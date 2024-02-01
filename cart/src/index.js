import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi";
import { Provider } from "react-redux";
import cartReducer, { getTotals } from "./features/cartSlice";
import productsReducer, { productsFetch } from "./features/productsSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(productsApi.middleware),
});
store.dispatch(productsFetch());
store.dispatch(getTotals());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
