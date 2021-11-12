import React from 'react';
import Footer from '../Footer';
import Problem from '../Problem';
import Header from '../Header';
import Croquis from '../Croquis';
import Budget from '../Budget';
import Gantt from '../Gantt';
import './Clients.scss';

function Clients() {
  return (
    <>
        <Header/>
        <Problem/>
        <Croquis/>
        <Budget/>
        <Gantt/>
        <Footer/>
    </>
  );
};

export default Clients;