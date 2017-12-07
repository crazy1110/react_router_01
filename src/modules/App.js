import React,{Component} from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import {IndexLink} from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><NavLink to="/about" activeStyle={{color:'red'}}>About</NavLink></li>
                    <li><NavLink to="/repos" activeStyle={{color:'blue'}}>Repos</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        )
    }
}