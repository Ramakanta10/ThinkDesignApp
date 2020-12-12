import React from 'react';

import './App.css';
import { connect } from 'react-redux';
import SpaceX from './Component/SpaceX';
function App(props) {

  return (
    <div className="App">
      <header className="">
      <h4>SpaceX Launch Programs</h4>
      </header>
	  <SpaceX/>
	   <footer className="">
	   Developed by:Ramakanta
       </footer>
    </div>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.SpaceReducer.name
  }
}
const mapDispatchToProps = {  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)