import React from 'react'
import ReactDom from 'react-dom'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }

    // bind event handlers so they can use `this`
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>I am the component!</h1>
        Click Me! (Count: {this.state.count})
      </div>
    )
  }

  handleClick() {
    console.log("Button clicked");
    this.setState({ count: this.state.count + 1 })
  }
}

const element = <Test />;
ReactDom.render(
  element,
  document.getElementById('my-component')
)
