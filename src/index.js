import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'
import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
	render () {
	  return (
       <div className="app">
        <BrowserRouter>
         <Route exact path="/" component={Scoreboard}/>
         <Route path="/board" component={Board}/>
        </BrowserRouter>
      </div>
	)
  }
}

ReactDOM.render(
    <App />
 , document.getElementById('root')
);
serviceWorker.register();
