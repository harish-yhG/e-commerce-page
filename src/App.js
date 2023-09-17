import React from 'react';
import './App.css';
import Header from './Header';
import Items from './Items';


class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Items />
      </div>
    );
  }
}

export default App;
