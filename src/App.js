import React from "react";
import "./App.css";
import DesktopDrawer from "./DesktopDrawer";
import MediaQuery from "react-responsive";
import MobileDrawer from "./MobileDrawer";

function App() {
  return (
    <div className="App">
      <MobileDrawer />
    </div>
  );
}

export default App;
