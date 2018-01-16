import React, { Component } from 'react';
import ReactDOM from "react-dom";

import "../css/style.css";

import keenImage from "../assets/keen.png";
import { setInterval, clearInterval } from "timers";

console.log(process);
console.log("AWS_SECRET_KEY:", process.env.AWS_SECRET_KEY);
console.log("AWS_ACCESS_KEY_ID:", process.env.AWS_ACCESS_KEY_ID);
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

function Avatar(props){
    return (
        <img className="Avatar" src={props.user.avtarUrl}  alt={props.user.name} />
    );
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />           
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
             {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

let author = {
    name: "Bob"
}

let theDate = new Date();

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Welcomes(){
    return (
        <div>
        <Comment name="Comment number 1" author={author} text="comment text etc lorem ipsum" date={theDate}/>
        <Welcome name="Tom" />
        <Welcome name="Bob" />
        </div>
    );
}

class  Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }

    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
       
        this.setState({
            date: new Date()
        });
    }
    render(){
    return (
        <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
}
}

const element = (
  <div>
  <Clock />
  <hr />
  <Welcome name="Tom" />
  <Welcome name="Bob" />
    <Welcomes />
    <h1>Hello, {formatName(user)}</h1>
   
    Hello from React
    <img src={keenImage} alt="Commander Keen" />
  </div>
);


ReactDOM.render(
    element,
    document.getElementById('app')
);

//render(<Hello />, document.getElementById("app"));


