import {Component} from 'react';
import React from "react";
import mui from "material-ui";
let Colors = mui.Styles.Colors;
import Search from "./Search";
import {RouteHandler} from "react-router";
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();

export default class Main extends Component {

  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  componentWillMount() {
    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      secondary1Color: Colors.blue900,
      accent1Color: Colors.lightBlue500

    });
  }
  render() {
    return (
    		<div>   
          <Search />
    			<RouteHandler {...this.props}/> 
    		</div>
    	);
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
};	