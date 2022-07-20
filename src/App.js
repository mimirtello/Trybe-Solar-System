import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}
// iniciando projeto

export default App;
