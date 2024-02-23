import React, { useState } from "react";

const Child = ({inputValue,onChange}) => {

    return (
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" value={inputValue}
            onChange={onChange}/>
        </div>
    )
}
export default Child;