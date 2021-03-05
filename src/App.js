// import logo from './logo.svg';

import { Route, Switch } from 'react-router-dom';

// general styles
import 'reset-css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
// 

import Header from './containers/header/header.component';
import ChatPage from './pages/chatPage/chatPage.component';
import NotFoundPage from './pages/notFoundPage/notFoundPage.component';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={ChatPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
