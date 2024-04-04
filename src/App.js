import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import ExplorePage from './components/pages/ExplorePage'; 


import './App.css'
import SquatsPage from './components/exercises/SquatsPage'
import PushUps from './components/pages/PushUps'
import PlankPage from './components/exercises/PlankPage'
import HistoryPage from './components/pages/HistoryPage'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/explore" component={ExplorePage} /> 
                    <Route path="/exercises/squats" component={SquatsPage} />
                    <Route path="/exercises/pushups" component={PushUps} />
                    <Route path="/exercises/planks" component={PlankPage} />
                    <Route path="/history" component={ HistoryPage} /> 
                    
                    
                                  
                   
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        
        <p className="text-center" style={ FooterStyle }>Designed by: <a href="#" target="_blank" rel="noopener noreferrer">MOVENTRAC</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
