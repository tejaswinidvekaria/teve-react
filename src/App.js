import React from "react";

// This is our main component
function App() { 
    
    //  we gonna return JavaScript xml : This allows us to put html directly into JavaScript.

    // This is looks like html but it is jsx
    // return (
        // issue :JSX expressions must have one parent element.
        // <h1>Welcome to the FB App</h1>
        // <p>hello</p>

        // To resolve above issue, I take div element as a parent element and write everything inside it only.
        // <div>
        // If you don't want to use div then you can use fragment which is <> empty angular brackets.
        // <>
        //     <div>
        //     <h1>Welcome to FB App</h1>
        //     <p>hello</p>
        //     </div>
           
            /* These 2 things are different in jsx than html */
            /* 1. I can not use class, it's className here in jsx */
            /* <div className="jsClass"></div> */

            /* 2.  I can not use for, I can use htmlFor instead */
            /* <label htmlFor="">Name</label>             */
        // </>
        // </div>

    // )
    return (
        <div className="container">
            <h1>App component</h1>
            <p>Hey</p>
        </div>
    )

    //  this is regular javascript, to write multiple elements would be nightmares with javascript, that is why react is more preferable and it's more readable
    // return React.createElement('div', { className: 'container' }, React.createElement('h1', {},'Feedback-application'))
}

export default App;