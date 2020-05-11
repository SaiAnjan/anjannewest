import './index.css';

import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import msinternship from './msinternship';
import frescodesign from './frescodesign';
import sia from './sia';
import ipt from './ipt';
import pepper from './pepper';
import target from './target';
import railway from './railway';
import cocards from './cocards';
import evaahan from './evaahan';
import checkup from './checkup';
import notem from './notem';
import mercury from './mercury';
import urhope from './urhope';
import sponso from './sponso';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/msinternship" component={msinternship} />
        <Route path="/frescodesign" component={frescodesign} />
        <Route path="/sia" component={sia} />
        <Route path="/ipt" component={ipt} />
        <Route path="/pepper" component={pepper} />
        <Route path="/target" component={target} />
        <Route path="/railway" component={railway} />
        <Route path="/cocards" component={cocards} />
        <Route path="/evaahan" component={evaahan} />
        <Route path="/checkup" component={checkup} />
        <Route path="/notem" component={notem} />
        <Route path="/mercury" component={mercury} />
        <Route path="/urhope" component={urhope} />
        <Route path="/sponso" component={sponso} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
