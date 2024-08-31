import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  
  const [currentTab, setCurrentTab] = useState("");

  function changeTab(tab) {
    setCurrentTab(tab);
  }

  return (
    <>
      <Navbar />
      <Sidebar currentTab={currentTab} changeTab={changeTab} />
    </>
  );
}

export default App;
