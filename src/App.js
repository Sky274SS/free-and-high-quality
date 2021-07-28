import React from "react";
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Stocks from "./pages/Stocks";
import Layout from "./containers/Layout";
import Services from "./pages/Services";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/Home' component={HomePage}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/Portfolio' component={Portfolio}/>
                    <Route path='/About us' component={AboutUs}/>
                    <Route path='/Stocks' component={Stocks}/>
                    <Redirect from="/" to="/Home"/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
