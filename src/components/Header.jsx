import React from "react";



// export const Comp1 = () => {
//     return <div>
//         comp1
//     </div>
// }


// export const Comp2 = () => {
//     return <div>
//         comp2
//     </div>
// }


// return {
//     Comp1: Comp1,
//     Comp2: Comp2
// }

const Header = (props) => {
    // const name=props.name
    // const data = props.data
    const {name, data} = props

    return <div 
                style={{
                    width:"auto",
                    height:"100px",
                    backgroundColor:"grey",
                    color:"red"
                }}
            >
        <h1>Header Name: {name} </h1>
        <div>data {data}</div>
    </div>
}


export default Header


