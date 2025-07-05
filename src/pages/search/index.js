import NavBar from "@/components/navBar";
import WidgetComp from "@/components/widget/widgetComp";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [search, setSearch] = useState("");
  const globalState = useSelector((state) => state.store.globalState);
  const [filter, setFilter] = useState({});
  const filterData = () => {
    const results = {};

    for (const key in globalState) {
      const filteredWidgets = globalState[key].filter(
        (widget) =>
          widget.widgetName.includes(search) ||
          widget.widgetText.includes(search)
      );

      if (filteredWidgets.length > 0) {
        results[key] = filteredWidgets;
      }
    }

    return results;
  };
  useEffect(() => {
    let time = setTimeout(() => {
      let data = filterData();
      setFilter(data);
    }, 800);
    return () => clearTimeout(time);
  }, [search, globalState]);
  return (
    <div>
      <NavBar search={search} setSearch={setSearch} />
      <div>
        <div className="container mx-auto">
          <div className="p-8">
            <h1 className="font-semibold text-2xl mb-4">Search Page</h1>
            {filter?.CSPM?.length > 0 ? (
              <div className="pt-4 ps-2">
                <h1 className="font-medium text-xl mb-3">CSPM dashboard</h1>
                <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                  {filter?.CSPM?.map((el, i) => (
                    <WidgetComp
                      widgetName={el?.widgetName}
                      widgetText={el?.widgetText}
                      widgetType={el ? "card" : ""}
                      category="CSPM"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {filter?.CWPP?.length > 0 ? (
              <div className="pt-4 ps-2">
                <h1 className="font-medium text-xl mb-3">CWPP dashboard</h1>
                <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                  {filter?.CWPP?.map((el, i) => (
                    <WidgetComp
                      widgetName={el?.widgetName}
                      widgetText={el?.widgetText}
                      widgetType={el ? "card" : ""}
                      category="CWPP"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {filter?.Ticket?.length > 0 ? (
              <div className="pt-4 ps-2">
                <h1 className="font-medium text-xl mb-3">Ticket dashboard</h1>
                <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                  {filter?.Ticket?.map((el, i) => (
                    <WidgetComp
                      widgetName={el?.widgetName}
                      widgetText={el?.widgetText}
                      widgetType={el ? "card" : ""}
                      category="Ticket"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {filter?.Image?.length > 0 ? (
              <div className="pt-4 ps-2">
                <h1 className="font-medium text-xl mb-3">Image dashboard</h1>
                <div className="gap-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                  {filter?.Image?.map((el, i) => (
                    <WidgetComp
                      widgetName={el?.widgetName}
                      widgetText={el?.widgetText}
                      widgetType={el ? "card" : ""}
                      category="Image"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
