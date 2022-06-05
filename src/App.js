import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = true;

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white">
              Sidebar 1
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar 2</div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              <Route path="/" element="ECommerce"></Route>
              <Route path="/ecommerce" element="ECommerce"></Route>

              <Route path="/orders" element="Orders"></Route>
              <Route path="/employees" element="Employees"></Route>
              <Route path="/employees" element="Customers"></Route>

              <Route path="/kanban" element="kanban"></Route>
              <Route path="/editor" element="editor"></Route>
              <Route path="/calendar" element="calendar"></Route>
              <Route path="/color-picker" element="colorPicker"></Route>

              <Route path="/line" element="line"></Route>
              <Route path="/area" element="area"></Route>
              <Route path="/bar" element="bar"></Route>
              <Route path="/pie" element="pie"></Route>
              <Route path="/financial" element="financial"></Route>
              <Route path="/color-mapping" element="Color mapping"></Route>
              <Route path="/pyramid" element="pyramid"></Route>
              <Route path="/staked" element="Stacked"></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
