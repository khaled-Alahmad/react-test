import { useState } from "react";

const LogedIn = () => {
    const [isLogedIn,setISLogedIn] = useState(false);
    let element = isLogedIn ? <h1>I'm Logged in !</h1> :<h1>I'm not logged in!</h1> ;
    // if(isLogedIn){
    //     element = <h1>I'm Logged in !</h1>
    // }else{
    //     element = <h1>I'm not logged in!</h1>
    // }
    return (
        <div>
            <button onClick={()=> {
              setISLogedIn(true)
            }}>Log in</button>
            {element}
        </div>
    )
}
export default LogedIn;