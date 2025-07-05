import Heading from "@/components/Heading";
import NavBar from "@/components/navBar";
import AddWidget from "@/components/widget/addWidget";
import WidgetComp from "@/components/widget/widgetComp";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const modal = useSelector((state) => state.store.modal);
  const globalState = useSelector((state) => state.store.globalState);
  const [state, setState] = useState({});
  useEffect(() => {
    setState(globalState);
  }, [globalState]);
  return (
    <section className="relative">
      <NavBar />
      <div className="container mx-auto">
        <div className="p-8">
          <Heading />
          <div className="mt-3 ps-2">
            <h1 className="font-medium text-xl mb-3">CSPM dashboard</h1>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
              {state?.CSPM?.map((el, i) => (
                <WidgetComp
                  widgetName={el?.widgetName}
                  widgetText={el?.widgetText}
                  widgetType={el ? "card" : ""}
                  category="CSPM"
                  key={i}
                />
              ))}
              <WidgetComp />
            </div>
          </div>
          <div className="pt-4 ps-2">
            <h1 className="font-medium text-xl mb-3">CWPP dashboard</h1>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
              {state?.CWPP?.map((el, i) => (
                <WidgetComp
                  widgetName={el?.widgetName}
                  widgetText={el?.widgetText}
                  widgetType={el ? "card" : ""}
                  category="CWPP"
                  key={i}
                />
              ))}
              <WidgetComp />
            </div>
          </div>
          <div className="pt-4 ps-2">
            <h1 className="font-medium text-xl mb-3">Ticket dashboard</h1>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
              {state?.Ticket?.map((el, i) => (
                <WidgetComp
                  widgetName={el?.widgetName}
                  widgetText={el?.widgetText}
                  widgetType={el ? "card" : ""}
                  category="Ticket"
                  key={i}
                />
              ))}
              <WidgetComp />
            </div>
          </div>
          <div className="pt-4 ps-2">
            <h1 className="font-medium text-xl mb-3">Image dashboard</h1>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
              {state?.Image?.map((el, i) => (
                <WidgetComp
                  widgetName={el?.widgetName}
                  widgetText={el?.widgetText}
                  widgetType={el ? "card" : ""}
                  category="Image"
                  key={i}
                />
              ))}
              <WidgetComp />
            </div>
          </div>
        </div>
      </div>
      {modal ? <AddWidget /> : ""}
    </section>
  );
}
