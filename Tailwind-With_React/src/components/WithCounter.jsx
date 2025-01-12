import { Component } from "react";

const WithCounter = (WrappedComponent) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      }
    }

    increseCounter = () => {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increseCounter={this.increseCounter}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default WithCounter;
