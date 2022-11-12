import React, { Component } from 'react';
class Foo extends Component {
  handleClick = () => {
    console.log('Click happened');

    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(console.log);
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default Foo;
