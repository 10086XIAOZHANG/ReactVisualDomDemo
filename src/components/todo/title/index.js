/**
 *创建时间:  2018/6/25
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
import React, {Component} from 'react';
export  default class Title extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputTxt:'',

        }
    }
    changeInputValue = (e)=> {
        this.timeout && clearInterval(this.timeout)
        this.timeout= setTimeout(((val)=>{
           this.setState({
               inputTxt:val,
           })
        })(e.target.value),100);

    }
    todoList (){
        this.props.todoList(this.state.inputTxt);
        this.setState({
            inputTxt:''
        },()=>{
            console.log(this.state.inputTxt);
        })
        setTimeout(function(){
            console.log(this.state.inputTxt);
        },0)
    }
    render() {
        return (
            <div>
                <input value={this.state.inputTxt} onChange={this.changeInputValue} />
                <button onClick={this.todoList.bind(this)}>udto list</button>
            </div>
        )
    }
}