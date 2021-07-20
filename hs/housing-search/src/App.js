import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { HomePage, PageNotFount } from './Pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/404' component={PageNotFount}></Route>
        <Redirect to='/404'></Redirect>
      </Switch>
    </Router>

  );
}

export default App;
