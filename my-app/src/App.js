import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import PrivateRoute from './components/PrivateRoute'  ;
const App = () => {
 return (
 <Router>
 <Switch>
 <Route exact path="/" component={Home} />
 <Route path="/login" component={Login} />
 <PrivateRoute path="/dashboard" component={Dashboard} />
 <PrivateRoute path="/settings" component={Settings} />
 </Switch>
 </Router>
 );
};
export default App;
