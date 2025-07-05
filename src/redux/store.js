import globalStore from "./globalStore";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    store: globalStore,
  },
});
export default store;
