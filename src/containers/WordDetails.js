import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordDetails extends Component {
  render() {
    if(!this.props.word) {
      return (
        <h3>No Word Selected</h3>
      ); 
    } else {
      return (
        <div>
          <h3>This is some details about {this.props.word.name}</h3>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { word: state.activeWord };
}

export default connect(mapStateToProps)(WordDetails);
