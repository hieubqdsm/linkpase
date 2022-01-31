import './App.css';
import LinkPase from "./components/listPase";
import LinkSS from "./components/listSS";
import React, { useState } from "react";
import NavBar from './components/navi';
const renderBody = (BodyItem = "PASE") => {
  // setState({BodyItem: BodyItem});
  switch (BodyItem) {
    case "PASE":
      return <LinkPase />;
    case "SS":
      return <LinkSS />;
    case "Other":
      return <LinkPase />;
    default:
      return <LinkPase />;
  }
}
function App() {
  const [bodyItem, setBodyItem] = useState("");
  const childCallbackFunction = (childData) => {
    setBodyItem(childData);
  }
  return (
    <div>
      <NavBar parentCallback={childCallbackFunction} />
      {renderBody(bodyItem)}
    </div>
  );
}

export default App;
