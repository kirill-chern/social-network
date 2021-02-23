import './index.css';
import reportWebVitals from './reportWebVitals';
import {default as state, addPost, changeNewPostText, subscribe} from "./data/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function renderTree() {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} changeNewPostText = {changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}
renderTree();

subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
