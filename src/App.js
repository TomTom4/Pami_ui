import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from "./pages/login"
import Main from './pages/main'
import MailScreen from "./pages/mailscreen"

function Users(){
	return <h2>Users</h2>
}
function Router1(){
	return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mails">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mails">
            <MailScreen />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router> 
	)
}

function App() {
  return (
	<Main/>   
  );
}

export default App;
