import { addGlobalState, triggerModal } from "@/redux/globalStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddWidget = () => {
  const [selected, setSelected] = useState("CSPM");
  const [show, setShow] = useState(false);
  const state = useSelector((state) => state.store);
  const [form, setForm] = useState({
    widgetName: "",
    widgetText: "",
  });
  const dispatch = useDispatch();
  const category = ["CSPM", "CWPP", "Image", "Ticket"];
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (form.widgetName && form.widgetText) {
      const payload = {
        [selected]: [...(state.globalState[selected] || []), form],
      };
      dispatch(addGlobalState(payload));
      setForm({
        widgetName: "",
        widgetText: "",
      });
      return;
    }
  };
  const closeModal = () => {
    dispatch(triggerModal(false));
    setShow(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);
  return (
    <div
      className="w-screen h-screen fixed top-0 "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
    >
      <div
        className={`h-full md:w-[550px] w-full fixed top-0 z-20 bg-white modal ${
          show ? "show" : ""
        }`}
      >
        <div className="flex justify-between items-center px-4 bg-blue-800 text-white py-2">
          <h1>Add Widget</h1>
          <span className="cursor-pointer" onClick={closeModal}>
            X
          </span>
        </div>
        <div className="h-full relative">
          <div className="px-2">
            <h1 className="pt-2">
              Personalize your dashboard by adding the following widgets
            </h1>
            <ul className="flex pt-2 gap-3 [&>li]:p-2 [&>li]:cursor-pointer border-b w-[280px]">
              {category?.map((el) => (
                <li
                  key={el}
                  onClick={() => setSelected(el)}
                  className={selected === el ? "border-b-2 border-black" : ""}
                >
                  {el}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 [&>input]:px-2 [&>input]:py-1 pt-3">
              <input
                placeholder="Widget Name"
                className="w-full outline-none border rounded"
                onChange={onInputChange}
                name="widgetName"
                value={form.widgetName}
              />
              <input
                placeholder="Widget Text"
                className="w-full outline-none border rounded"
                onChange={onInputChange}
                name="widgetText"
                value={form.widgetText}
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pe-3 absolute bottom-16 right-3">
            <button
              className="border border-violet-950 px-6 py-1 rounded-md hover:bg-violet-950 hover:text-white"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="border border-violet-950 px-6 py-1 rounded-md hover:bg-violet-950 hover:text-white"
              onClick={onFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
