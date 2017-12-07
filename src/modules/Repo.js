/**
 * Created by 小埋 on 2017/12/7.
 */
import React,{Component} from 'react'

export default class Repo extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
}