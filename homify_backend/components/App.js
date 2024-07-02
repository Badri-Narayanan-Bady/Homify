import React, { useState, useEffect } from 'eact';
import { BrowserRouter, Route, Switch, Redirect } from 'eact-router-dom';
import { AuthContext } from './context/AuthContext';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import ServiceRequest from './ServiceRequest';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      // Fetch user data from API
      //...
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/service-request" component={ServiceRequest} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;