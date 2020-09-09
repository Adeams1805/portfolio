import React from 'react'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./app/components/Header";
import NavigationMenu from "./app/components/NavigationMenu";
import Footer from "./app/components/Footer";

import Home from "./app/pages/Home";
import Autres from "./app/pages/Autres";
import Program from "./app/pages/Program";

export class App extends React.Component {

  render() {
      return (
          <BrowserRouter>
            <Header/>
            <NavigationMenu/>
      
            <div className="content-wrapper">
      
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/autre" component={Autres}/>
                <Route path="/programmation" component={Program}/>
              </Switch>
      
            </div>
      
            <Footer/>
          </BrowserRouter>
      );
    }

}
