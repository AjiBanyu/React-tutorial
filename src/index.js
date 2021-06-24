import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';

// contoh membuat component helloWorld
// const HelloWorld = () => {
//   return <p>Hello World</p>
// }

// reactDom merender component helloWorld, dan mencari id root 
// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById('root')
// );

// reactDom merender componen App , sebelumnya component App di import terlebih dahulu 
// pada import file App dari folder App

// ada dua cara membuat component :
// 1. StateLess Component

// const HelloComponent = () => {
//   return <p>Hello Functional Component</p>
// }

// 2. StateFull Component 
// hampir sama seperti OOP pada PHP MVC ada class dan di ikuti extends/turunan pada library react.component 
// lalu memanggil method render , di dalamnya mengembalikan/return component
// class StateFullComponent extends React.Component {
//   render(){
//     return <p>StateFull Component</p>
//   }
// }

ReactDOM.render(
  <HelloComponent />, document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
