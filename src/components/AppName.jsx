import React, {useState} from "react";


function AppName({onAppNameChange, appName}) {
  return (
    <div>
        {"Give name of App:"}
       <input type="text" value={appName} onChange={onAppNameChange}/>
    </div>
  );
}

export default AppName;

