import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Order from './containers/order/Order';


class App extends Component{



  renderRouter(){
    return(
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/orders" component={Order} />
      </Switch>
    )
  }

  render(){
    return (

      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    );
  }

}

export default App;