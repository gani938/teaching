import React, {useState, useEffect} from "react";

function MovieName({appName}) {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)

  console.log(" every rerender 1")
    useEffect(()=> {
        console.log("executed every time")
        return () => {
            console.log("I am cleaning component subscriptions 1");
        }
    })

  useEffect(()=> {
    console.log("executed only once 2")
    console.log("gettin name from api");
    setName("Thopu")

    return () => {
        console.log("I am cleaning component subscriptions 2");
    }
  }, [])

  console.log(" every rerender 2")
  useEffect( ()=> {
      console.log("executed on count change")
    setName(name+count)
    return () => {
        console.log("I am cleaning component subscriptions 3");
    }
  }, [count])

  console.log(" every rerender 3")

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onCountChange = (event) => {
    setCount(event.target.value)
  }

  let color = ""
  if(Number(count) %2 === 0) {
    color = "red"
  }
  else {
      color = "blue"
  }

  return (
    <div>
        Enter N ame of Movie for appName: {appName}
      <input type="text" value={name} onChange={onNameChange}/>
      <div>Movie Name: {name}</div>
      <div style={{color:color}}>
          count <input type="number" value={count} onChange={onCountChange}/>
      </div>
      { Number(count)%2===0 ?
        <div>I am red</div>
        :<div>  I am blue </div>
      }
      {
          (Number(count)%2===0) && <div> I will only be visible for even numbers</div>
      }
    </div>
  );
}

export default MovieName;

