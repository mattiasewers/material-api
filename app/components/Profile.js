import React from 'react';
import Router from 'react-router';
import {Tabs, Tab, CardHeader} from "material-ui";
import styles from "../styles";
import helpers from '../utils/helpers';
import UserInfo from '../Twitter/UserInfo';


export default class Profile extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	user: {},
	  	timeline: []
	  };
	 }
	 init(){
	 	helpers.getTwitterInfo(this.router.getCurrentParams().username)
	 		.then(function(dataObj){
	 			this.setState({
	 				user: dataObj.user,
	 				timeline: dataObj.timeline
	 			});
	 		}.bind(this));
	 }
	 componentWillMount(){
	 	this.router = this.context.router
	 }
	 componentDidMount(){
	 	this.init();
	 }
	render() {
		var { router } = this.context;
		var username = this.router.getCurrentParams().username;
		return(
			<div style={styles.container}>
				<section style={styles.cardContainer}>
					<UserInfo username={username} user={this.state.user} />
				</section>
				<section style={styles.cardContainer}>

				</section>
			</div>


		);
	}

}

Profile.contextTypes = {
  router: React.PropTypes.func
};