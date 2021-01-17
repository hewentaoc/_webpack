import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props){
        // JavaScript 强制开发者在构造函数中先调用super，才能使用this
        super(props)
        this.state = {
            number: 1
        }
    }
    onClick = ()=>{
        console.log(this.state.number)
        this.setState({
            number:++this.state.number
        })
    }
    render(){
        return <h1 onClick={this.onClick}>
            标题:{this.state.number}
            <Content>
                <div>主要内容</div>
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
            </Content>
        </h1>
    }
}

function Content(props){
    return <div>
        {props.children}
    </div>
}