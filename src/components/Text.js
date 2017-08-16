import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#summernote').summernote("fullscreen.toggle");
  }

  render() {
    return (
      <div id="summernote"></div>
    );
  }
}

export default Text;
