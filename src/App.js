import React, {useState} from "react";

//import MyHeader, {Comp1, Comp2} from "./components/Header"
import MyHeader from "./components/Header"

import Name from "./components/Name"
import AppName from "./components/AppName";

function App() {
  const [appName, setAppName] = useState();

  const onAppNameChange = (e) => {
    setAppName(e.target.value)
  }
  const nameOfHeader = "Sanjay Header"
  return (
    <div>

      <MyHeader  name={nameOfHeader} data="dasdasdas" />
      <Name />
      <h1> Name of App {appName}</h1>
      <AppName  onAppNameChange={onAppNameChange} appName={appName} />
    </div>
  );
}

export default App;

