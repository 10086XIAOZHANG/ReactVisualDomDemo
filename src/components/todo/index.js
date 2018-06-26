/**
 *创建时间:  2018/6/25
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
/* @jsx h */
import React, {Component} from 'react';
import List from './list'; //组件
import Title from './title';//组件
export  default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:['Foo','Bar'],
        }
    }
    todoList (item){
        this.state.list.push(item);
        const newList=this.state.list;
        this.setState({ //re-render patch(vnode,newVnode)
            list:newList,
        })
    }
    render() {
        return (
           <div>
               <Title todoList={this.todoList.bind(this)} />
               <List data={this.state.list}/>
               <Title todoList={this.todoList.bind(this)} />
               <List data={this.state.list}/>
           </div>
        )
    }
}