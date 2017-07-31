import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectWord } from '../actions/Words';

class WordList extends Component {

  createWordList() {
    return this.props.words.map((word) => {
      return <li key={word.id} onClick={() => this.props.selectWord(word)}>{word.name}</li>
    });
  }

  render() {
    return (
      <ul>
       {this.createWordList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { words: state.words };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectWord}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WordList);
