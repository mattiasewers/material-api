import React from "react";
import Home from "../components/Home";
import Main from "../components/Main";
import Profile from "../components/Profile";
import NoMatch from "../components/NoMatch";
import Router from "react-router";

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
	<Route name="index" path="/" handler={Main}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		<DefaultRoute handler={Home} />
		<Route path="/profile/" handler={NoMatch}/>
	</Route>
);