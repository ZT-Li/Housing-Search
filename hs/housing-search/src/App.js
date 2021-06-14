import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { PageNotFount } from './Pages/NotFound404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SearchBar}></Route>
        <Route exact path='/404' component={PageNotFount}></Route>
        <Redirect to='/404'></Redirect>
      </Switch>
    </Router>

  );
}

export default App;
