import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import GuessedWords from './GuessedWords'
import Congrats from "./Congrats"
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Jotto</h1>
          <Congrats success={true}/>
          <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]}/>
        </div>
      </Provider>
    );
  }
}

export default App;
