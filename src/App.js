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
import { Route, Switch, Redirect } from 'react-router-dom';

/********************************************** */
//begin: 1.wrapping entire <App/> by <BrowserRouter></BrowserRouter>
//        2. put <Route>s inside <Switch></Switch>
//        3. put <Switch> under the component that you want to route
//        4. the component should contain <Link to="url"/> instead of <a href="url">

// Basiclly, <Link> will give link a path, and then <Route> will match the path that <Link> provides and 
//the path that in <Route>, if (match) return page, else display nothing.
/********************************************** */
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
// 1. history: history of browser
// 2. location: current location of component
// 3. match: determing how path matches URL
// you can find more information: https://reacttraining.com/react-router/core/guides/quick-start
/************************** */
// Passing props:
// So component has three props: history, location and match. What if you want to pass your own additional props?
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
/***************************** */
//Optional parameters:
// you can add a "?"after the parameter, for example: path="/posts/:year?/:month?"
//BUT YOU SHOULD avoid it and you need to do Query String Parameters
/**************************** */
//Query String Parameters:
// $npm i query-string@6.1.0
//when you add "?sortBy=newest" after url, it makes a qurey for sortBy="newest", see posts.jsx
/**************************** */
//Redirects(404):
// As I mentioned at the beginning of two ways of solving always route HOME page. 
// here we want to add "exact" to home, due to we don't want NOT FOUND PAGE to direct user to HOME page
// steps: 1. import {Redirect} from "react-router-dom" 
//        2. <Redirect to="/not-found" /> at bottom, so Now it tries to redirect user to /not-found, but there is no such route
//        3. add <Route path="/not-found" component={NotFound} />, SO it redirects user to this route
// there is another way to use Redirect, for example: you want redirect user from A to B
//steps:  1. add <Redirect from="/products" to="/not-found" />, it means when users click products, they will
//be redirect to 'NOT-FOUND' page. However, as I mentioned before, the only frist match route will be routed.
//Therefore, put the "<Redirect/>" in front of "from="url"" url.
/******************************** */
//Programmatic Navigation:
// programmatic navigation means when user submit a file, we want to redirect user to another page.
// we should use the method in this.props.history, and you can check them in browser
// push() is used when we want come back, replace() is used when we don't want user come back(login page)

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />

            <Route path="/products" render={props => <Products sortBy="New" {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Redirect from="/products" to="/not-found" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
