import { useState } from "react";

function ExpenceItem(props) {
    const [title,setTitle]=useState(props.title);
    const clikeMe= ()=>{
        setTitle("title updated!")
        console.log("clicke!");
    }
    return <div>
    <h5>{title} </h5>
    <h4>{props.price}</h4>
    <h6>{props.date}</h6>
    <button onClick={clikeMe}>clic</button>
  </div>;
}
export default ExpenceItem;
