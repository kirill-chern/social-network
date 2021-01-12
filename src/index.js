import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  { id: 1, message: "It`s my first post", likesCount: 12, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
  { id: 2, message: "My name is Cathrine", likesCount: 30, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
  { id: 3, message: "I want to tell you something", likesCount: 5, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
  { id: 4, message: "It`s my first post", likesCount: 45, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
  { id: 5, message: "Hey man", likesCount: 98, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
];

const dialogsData = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Clark" },
  { id: 4, name: "Jennifer" },
  { id: 5, name: "Valentina" },
];

const messagesData = [
    { id: 1, message: "Hello man" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I want to tell you something" },
    { id: 4, message: "Where are you disappeared?" },
    { id: 5, message: "Hey man" },
  ];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} messages={messagesData} dialogs={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
