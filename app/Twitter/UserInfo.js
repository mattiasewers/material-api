import React from 'react';

export default class UserInfo extends React.Component {

	render(){
		return(
			<div>
				<h2>User Profile</h2>
				{this.props.user.name && <li> {this.props.user.name} </li> }
			</div>	
		);
	}
}

UserInfo.propTypes = {
	username: React.PropTypes.string.isRequired,
	user: React.PropTypes.object.isRequired
}