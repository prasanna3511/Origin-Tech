import './App.css';
import React from 'react'
import Header from './Header';
import Home from './Home';
import Info from './Info';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';
import { Slider } from '@mui/material';
import Break from './Break';
import Homebg from './Homebg';
import Description from './Description';
import About from './About';


const promise = loadStripe("pk_live_51JvPo4SDCqaXJOSgPvHqyRj1QSLVPymM39D0JlxJAwhXyzW8TKCT1X5ZfkLtGhU1Q4cgqcu1tWjUibUXjOVXfCkU00hAYI0ePb");
function App() {
  const [{} , dispatch] = useStateValue();

  useEffect(() => {


    auth.onAuthStateChanged(authUser =>{
        console.log(authUser);

      if(authUser){
        
        dispatch({
          type: 'SET_USER',
          user : authUser
        })

      }else{
         
         dispatch({
           type: 'SET_USER',
           user: null
         })

      }

    })
  }, [])
  return (
    //bem
    <Router>

      <div className="app">
        <Switch>
        <Route path='/orders'>
           
            <Header/>
            
            <Orders/>
            <Footer/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/description'>
           
           <Header/>
           
           <Description/>
           <Footer/>
         </Route>

         <Route path='/about'>
           
           <Header/>
           
           <About/>
           <Footer/>
         </Route>


          <Route path='/checkout'>
           
            <Header/>
            
            <Checkout/>
            <Footer/>
          </Route>

          <Route path='/payment'>
            
            <Header/>
            
            <Elements stripe={promise}>
             <Payment />
           </Elements>
           <Footer/>
          </Route>

          <Route path='/'>
           
            < Header />
           
           <Homebg/>
           
            <Home />
           
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;