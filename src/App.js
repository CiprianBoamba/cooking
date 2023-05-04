import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

// import components
import Create from '../src/pages/create/Create';
import Home from '../src/pages/home/Home';
import Recipe from '../src/pages/recipe/Recipe';
import Search from '../src/pages/search/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
