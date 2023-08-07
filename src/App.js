import React, { useEffect, useState } from 'react';
import 'swiper/swiper.min.css';
import { Switch, Route } from 'react-router-dom';

import Error from './pages/Error';

import './App.css';
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';




const App = () => {
  return (
    <>
      
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          
          
          <Route component={Error} />
        </Switch>
        <Footer />
      
    </>
  );
};

export default App;
