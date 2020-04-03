import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PlaceDetails from './components/places/PlaceDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePlace from './components/places/CreatePlaces';
import Account from './components/dashboard/Account';
import Friends from './components/friends/FriendsDashboard'
import FriendCreate from './components/friends/FriendCreate'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/place/:id" component={PlaceDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePlace} />
          <Route path="/account" component={Account} />
          <Route path="/friends" component={Friends} />
          <Route path="/addfriend" component={FriendCreate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
