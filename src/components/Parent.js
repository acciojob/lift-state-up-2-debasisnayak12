import React, {useState} from "react";
import Child from "./Child";

const Parent = () => {
    const [inputValue, setinputValue] = useState("");

    function handleChange(e){
        setinputValue(e.target.value);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            {inputValue}
            <Child inputValue={inputValue} onChange={handleChange}/>
        </div>
    )
}
export default Parent;