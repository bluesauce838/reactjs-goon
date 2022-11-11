import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Findx from './Findx';
import Foo from './Foo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: 'React',
      title: 'rabi pati',

      name: console.log('how'),
    };
  }

  render() {
    return (
      <div>
        {/* <Hello name={this.state.name} /> */}
        {/* <p>
          Start editing to see some magic happen :)
        </p> */}

        <Hello name={this.state.title} />

        <Findx />
        <Foo/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
