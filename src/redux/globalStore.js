const { createSlice } = require("@reduxjs/toolkit");

const globalState = createSlice({
  name: "globalState",
  initialState: {
    globalState: {
      CSPM: [
        {
          widgetName: "Widget 1",
          widgetText: "sample text",
        },
        {
          widgetName: "widget 2",
          widgetText: "sample text2",
        },
      ],
      CWPP: [
        {
          widgetName: "CWpp widget",
          widgetText: "test",
        },
      ],
    },
    modal: false,
  },
  reducers: {
    addGlobalState: (state, action) => {
      state.globalState = { ...state.globalState, ...action.payload };
    },
    triggerModal: (state, action) => {
      state.modal = action.payload;
    },
    updateGlobalState: (state, action) => {
      state.globalState = action.payload;
    },
  },
});
export const { addGlobalState, triggerModal, updateGlobalState } =
  globalState.actions;
export default globalState.reducer;
