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
// Route props
// In each component which in Route basiclly has three props: history, location, and match.
//we didn't pass these props, where did they come from?
//They come from Route. Route basiclly is a wrapper which wraps component
//in another word, if "path" match, then render "component" with injecting these three props automaticlly
// 1. histroy: histroy of browser
// 2. location: current location of component
// 3. match: determing how path matches URL
// you can find more information: https://reacttraining.com/react-router/core/guides/quick-start
/************************** */
// Passing props:
// So component has three props: histroy, location and match. What if you want to pass your own additional props?
// Before we use <Products sortBy="New"/> to pass props. so we replace component with it and wrap it
// with render={()=>{}} which means if path match, then call  render={()=>{}}, but the old three props will disappear.
// So add them by using spread operator:  render={props => <Products sortBy="New" {...props} />}. Make sense right.
/*************************** */
//Route parameters:
// We want to pass a paramenter, for example: pass #id to Products, and Products will pass it to ProductDetails.
// Do the following: path="/products/:id" a colon(:) must to have preceding parameter
// The parameter that ProductDetails recives is in: this.props.match.params.id   
// Which means params are stored in "match"
// Remember change <a> to <Link> inorder to prevent full page reload

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={props => <Products sortBy="New" {...props} />} />
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
