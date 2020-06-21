import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound';
import Contact from './components/Contact';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Intro} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/about' component={About} /> */}
          <Route path='/contact' component={Contact} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
