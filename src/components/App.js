import React, { Component} from 'react';

class App extends Component {
  render() {
    return (
      <div id="">
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
