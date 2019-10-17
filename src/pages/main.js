import React from 'react'
import Login from './login'
import MailScreen from './mailscreen'
import {BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom'


function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


class Main extends React.Component{

	constructor(props){
		super(props)
		this.state ={ isAuthenticated: true }
		let { from } = {from: {pathname:'/'}}
	}


	render(){

		return(
			<Router>
				<Switch>
					<Route path='/login'>
						<Login/>
					</Route>
					<PrivateRoute path='/' isAuthenticated={this.state.isAuthenticated}>
						<MailScreen/>	
					</PrivateRoute>
				</Switch>
			</Router>
		)
	}
}



export default Main
