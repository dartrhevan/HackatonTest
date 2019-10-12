import React from 'react';
import '../css/App.css';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEntered: false
    }
    this.sendState = this.sendState.bind(this)
  }

  sendState() {
    this.setState({isEntered: true})
  }
  
  render() {
    return (
      <div>
        <Header isEntered={this.state.isEntered}/>
        <Main sendState={this.sendState}/>
        <Footer /> 
      </div>
    );
  }
}

export default App;
