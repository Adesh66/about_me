import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';
function App() {
  return (
    <div className='App'>
      <Header />
      <Router >
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/about' component={About} /> */}
          {/* <Route path='/contact' component={Contact} /> */}
          <Route component={Notfound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
