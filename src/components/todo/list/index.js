/**
 *创建时间:  2018/6/25
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */

import React, {Component} from 'react';

export  default class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:this.props.data,
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(function(item,index){
                        return (<li key={index}>{item}</li>);
                    })}
                </ul>
            </div>
        )
    }
}