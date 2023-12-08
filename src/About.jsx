import React from "react";


function simplefun()
{
    alert("Are you ok?")
}



export default class About extends React.Component
{
    x = 1;

    y = function simplefun123()
    {
        alert("Are you ok?")
    }
    render()
    {
        return(
            <>
                {this.x}
                <h1 onClick={simplefun}>Class Component {this.x}</h1>
                <button onClick = {this.y}>Click here!</button>
            </>
        )
    }
}