import React from 'react';
import logo from '../../assets/icons/logo.svg';

import './Home.css';

const Home = () => (
  <div className="Home">
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <p>프로젝트 초기 구조</p>
      <a
        className="Home-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
