import React from "react";

class ClassStateNum extends React.Component {
  state = { obj: "dwu" }
  fun1 = () => {
    this.setState({obj:45})

    // this.setState
    // (
    //   () =>
    //   (
    //     {obj:6}
    //   )
    // )

    // this.setState
    // (
    //   () =>
    //   (
    //     {obj:this.state.obj - 1}
    //   )
    // )

    // this.setState
    //   (
    //     (prevState) =>
    //     (
    //       { obj: prevState.obj + 5 }
    //     )
    //   )
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.obj}</h3>
        <button onClick={this.fun1}>Click</button>
      </div>
    )
  }
}
export default ClassStateNum