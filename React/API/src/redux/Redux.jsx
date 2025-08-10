import React from "react";
import { Provider } from "react-redux";
import Counter2 from "../Components/Counter2"; // Import Counter2
import { store } from "../store"; // Import store

function Redux() {
  return (
    <Provider store={store}>
      <Counter2 />
    </Provider>
  );
}

export default Redux;
