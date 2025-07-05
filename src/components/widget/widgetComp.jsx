import { triggerModal, updateGlobalState } from "@/redux/globalStore";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
const WidgetComp = ({ widgetName, widgetText, widgetType, category }) => {
  const globalState = useSelector((state) => state.store.globalState);
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(triggerModal(true));
  };
  const deleteMethod = () => {
    if (globalState[category]) {
      let data = globalState[category]?.filter(
        (el) => el?.widgetName !== widgetName
      );
      let payload = {
        ...globalState,
        [category]: data,
      };
      dispatch(updateGlobalState(payload));
    }
  };
  return (
    <div
      className={`md:min-w-[400px] w-full h-[200px] rounded-xl ${
        widgetType ? "bg-white" : "bg-gray-100"
      }`}
    >
      {widgetType ? (
        <div className="px-3 py-2 h-full">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">
              {widgetName && widgetName}
            </h1>
            <span
              className="p-3 hover:cursor-pointer bg-red-500 hover:bg-red-700 rounded-full text-white"
              onClick={deleteMethod}
            >
              <MdDelete />
            </span>
          </div>
          <div className="flex justify-center items-center h-[150px]">
            <p>{widgetText && widgetText}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <button
            className="border py-1 px-3 rounded-lg text-blue-700 font-medium"
            onClick={handleModal}
          >
            <span className="flex items-center gap-2">
              <AiOutlinePlus /> <span>Add Widget</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WidgetComp;
