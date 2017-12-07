import React from 'react'
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import {render} from 'react-dom'
import Repos from './modules/Repos'
import About from './modules/About'
import App from './modules/App'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
        </Route>
    </Router >
), document.getElementById('app'))


