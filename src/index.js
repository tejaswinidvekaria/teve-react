// import { createRoot } from 'react-dom';
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom' // react library allows us to interact with DOM in the browser
import './index.css'
import App from './App'

// this is the entry point to react in javaScript 
//  first arg: whatever we wonna insert [which is gonna be our main App Component]
// second arg: where you want to put it? [Here we put it in the div with the id of 'root']

// ReactDOM.render(<h1>My Feedback App</h1>, document.getElementById('root'))

// Our main App Component displayed here, and any other components we create i.e navigation, feedback-items whatever that's gonna be embedded into main App Component
// component here either classes(old school way of component creation) or functions (more modern way to create a component : functional component something called hooks).

//StrictMode is offered by react for additional checks and warnings. and we are gonna wrap this using React.StrictMode
ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'))

// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.


// const root = document.getElementById('root');
// const element = <App/>;
// const rootInstance = createRoot(root);
// rootInstance.render(element);

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>); 