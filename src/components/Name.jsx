import React, {useState} from "react";

function Name() {
  const [name, setName] = useState("Sanjay")


  const onNameChange = (event) => {
      console.log(event.target.value);
    setName(event.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={onNameChange}/>
      <div>{name}</div>
    </div>
  );
}

export default Name;

