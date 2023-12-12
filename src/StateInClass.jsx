import { Component } from "react"

class StateInClass extends Component {
    state = { count: 5 }

    fun1 = () => {
        // this.setState({count:10})


        // this.setState
        // (
        //     () => 
        //     (
        //         {count:"Hii Drashti!!"}
        //     )
        // )


        // this.setState
        // (
        //     () =>
        //     (
        //         {count:this.state.count+3*4-5}
        //     )
        // )

        this.setState
            (
                (prevState) =>
                (
                    { count: prevState.count + 2 }
                )
            )

    }
    render() {
        return (
            <div className="App">
                <h4>{this.state.count}</h4>
                <button onClick={this.fun1}>Click here</button>
            </div>
        )
    }
}

export default StateInClass