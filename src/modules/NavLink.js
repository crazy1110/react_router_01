/**
 * Created by 小埋 on 2017/12/7.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class NavLink extends Component{
    render(){
        return (
            <Link {...this.props} activeClassName="active"/>
        )
    }
}