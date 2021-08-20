// Import Links ---------------------------------------------------------------------
import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import 'bootstrap/dist/css/bootstrap.css';

//App Component ----------------------------------------------------------------------
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
