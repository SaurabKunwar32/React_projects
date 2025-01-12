import { Component } from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="mb-4">{this.props.name}</h2>
          <h1
            className="bg-orange-500 pt-3 pb-3 text-center align-middle cursor-pointer w-16"
            onClick={this.props.increseCounter}
          >
            {this.props.count}
          </h1>
        </div>
      </>
    );
  }
}

export default WithCounter(ClickCounter);
