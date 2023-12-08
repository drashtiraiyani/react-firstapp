function simplefun()
{
    alert("Are you ok?")
}

function Compo1()
{
    function simplefun123()
{
    alert("Hello Alert 123...!")
}
    return(
        <>
            <p>This is component 1</p>

            <button onClick={simplefun123}>Click!</button>
        </>
    )
}

function Test()
{
    const x = 12;
    return(
        <>
            <h3>{x}</h3>
            <h1 onClick={simplefun}>Functional Component</h1>
            <Compo1/>
        </>
    )
}

export default Test;