import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { StyledContainer } from "./components/Styles";

//loder css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

//auth & redux
import { connect } from "react-redux";

import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
function App({ checked }) {
	return (
		<Router>
			{checked && (
				<StyledContainer>
					<Switch>
						<BasicRoute exact path="/" component={Home} />
						<BasicRoute exact path="/signup">
							<Signup />
						</BasicRoute>
						<BasicRoute exact path="/login">
							<Login />
						</BasicRoute>
						<AuthRoute exact path="/dashboard">
							<Dashboard />
						</AuthRoute>
					</Switch>
				</StyledContainer>
			)}
		</Router>
	);
}

const mapStateToProps = ({ session }) => ({
	checked: session.checked,
});

export default connect(mapStateToProps)(App);
