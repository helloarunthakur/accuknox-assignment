import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { triggerModal } from "@/redux/globalStore";
const Heading = () => {
  const dispatch = useDispatch();
  return (
    <div className="md:flex justify-between items-center">
      <h1 className="font-semibold text-2xl mb-4">CNAPP Dashboard</h1>
      <div className="flex gap-3 items-center justify-end md:justify-normal">
        <button
          className="flex items-center gap-2 bg-white rounded px-3 py-1"
          onClick={() => dispatch(triggerModal(true))}
        >
          <span>Add widget</span> <AiOutlinePlus />
        </button>
        <button className="bg-white rounded p-2">
          <LuRefreshCw />
        </button>
        <button className="bg-white p-2 rounded">
          <BsThreeDotsVertical />
        </button>
      </div>
    </div>
  );
};

export default Heading;
