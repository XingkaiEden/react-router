import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
// import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
//when rander routes, home page always there, due to it starts with "/" which same as other path start with.
//two method solve this:
// 1. add exact: <Route path="/" exact component={Home} />, so it will render home if exact path match
// 2. use Switch: only one route will be render inside the switch, so !!!! make order from less general to most general!!!!
/************************ */
// In each component which in Route basiclly has three props: history, location, and match.
//we didn't pass these props, where did they come from?
//They come from Route. Route basiclly is a wrapper which wraps component
//in another word, if "path" match, then render "component" with injecting these three props automaticlly
// 1. histroy: histroy of browser
// 2. location: current location of component
// 3. match: determing how path matches URL
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
