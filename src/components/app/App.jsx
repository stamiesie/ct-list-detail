import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharactersContainer from '../../containers/charactersContainer';
import Details from '../../containers/detailPage/details';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={ CharactersContainer }
            />
            <Route
              path="/:id"
              exact
              component={ Details }
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
