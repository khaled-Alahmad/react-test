import { useState } from "react";

const ExpenceForm = () => {
    const [enterTitle,setEnterTitle]=useState("")
    // const [enterPrice,setEnterPrice]=useState("")
    // const [enterDate,setEnterDate]=useState("")

    const onChangeItem=(event) =>{
        setEnterTitle(event.target.value)
        console.log(enterTitle)
    }
  return <div>
    <form>
    <label>Title:</label><input type="text" name="title" onChange={onChangeItem} />
    <label>Price:</label><input type="text" name="price" min="1" step="0.1"/>
    <label>Date:</label><input type="Date" name="date"/>
    <button type="submit">Ok</button>
    </form>

  </div>;
};
export default ExpenceForm;
