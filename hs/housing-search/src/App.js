import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { ZillowPage, HomePage, PageNotFount } from './Pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/404' component={PageNotFount}></Route>
        <Route exact path='/zlp' component={ZillowPage}></Route>
        <Redirect to='/404'></Redirect>
      </Switch>
    </Router>

  );
}

export default App;
