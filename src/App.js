import React from 'react';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import ServiceAdd from './components/ServiceAdd.js';
import ServiceList from './components/ServiceList.js';


export default function App() {
  // const urlEnv = process.env.REACT_APP_URL;

  return (
    <React.Fragment>
      <ServiceAdd />
      <ServiceList />
    </React.Fragment>
  );
}
