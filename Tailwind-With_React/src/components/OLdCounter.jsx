import { Component } from "react";

class OldCounter extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0, 
    };
    this.decreaseCount=this.decreaseCount.bind(this)  
    this.setTimer = setInterval(() => {
      console.log("hello");
    }, 1000);
  }

  componentDidMount() {
    console.log("component mount");
  }

  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.setTimer);
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log("render");
    return (
      <>
        <h2 className="mt-4">{this.props.name}</h2>
        <div className="flex gap-4 mt-6">
          <button
            className="  bg-blue-500 rounded-md px-4 py-1 "
            onClick={this.decreaseCount}
          >
            -
          </button>
          <h1 className="text-xl font-bold">{this.state.count}</h1>
          <button
            className=" bg-blue-500 rounded-md px-4 py-1 "
            onClick={function () {
              this.setState({ count: this.state.count + 1 })
            }.bind(this )}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
