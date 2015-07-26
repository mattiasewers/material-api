import React from "react";
import {FontIcon, Toolbar, ToolbarGroup, TextField, ToolbarTitle, RaisedButton, Styles} from 'material-ui';

let Colors = Styles.Colors;


class Search extends React.Component {
	  constructor(props, context){
	    super(props, context);
	    context.router;
	  }

	handleSudmit() {
		var { router } = this.context;
		var username = this.refs.username.getDOMNode().value;
		this.refs.username.getDOMNode().value = "";
		router.transitionTo('profile', {'username': username});
	}

  render() {
    return( 
          <Toolbar style={toolbar}>
            <ToolbarGroup key={0} float="left"> 
              <ToolbarTitle text="Twitter Material" />
            </ToolbarGroup>
            <form onSudmit={this.handleSudmit.bind(this)}>
	            <ToolbarGroup key={2} float="right"> 
	              	<RaisedButton type="sudmit" label="Search" primary={true} onClick={this.handleSudmit.bind(this)}/>
	            </ToolbarGroup> 
	            <ToolbarGroup key={1} float="right"> 
	              <i className="material-icons">&#xe8b6; </i>
	              <input type="search" placeholder="search..." className="search" ref="username" />
	            </ToolbarGroup>	
            </form>
            
          </Toolbar>
	);
  }
}

let toolbar = {
  backgroundColor: Colors.blue500,
  height: '56px'
}

Search.contextTypes = {
  router: React.PropTypes.func
};

export default Search;