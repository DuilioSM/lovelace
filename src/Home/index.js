import React from "react";
import Main from '../Main';
import Header from '../Header/index';
import Mision from '../Mision';
import Giphy from '../Giphy';
import Values from '../Values';
import Footer from '../Footer';

function Home(){
  return(
  <>
    <Header />
    <Main/>
    <Mision/>
    <Giphy/>
    <Values/>
    <Footer/>
  </>
  );
};

export default Home;