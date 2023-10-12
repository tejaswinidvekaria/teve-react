import React from "react";

function App() {
    
    //    before returning we can set variables , create other functions and so on.
    const book = "Sorathi Baharvatiya"; // This is not the react way of setting up state, in react we have a special hook that known as "useState"
    const author = "Zaverchand Meghani";
    const comments = [
        { id: 1, Comment: "Nice Work" },
        {id: 2, Comment: "Great staff"},
        {id: 3, Comment: "Good learning"}
    ];
    const loadingComments = false;
    const showComments = true;
    if (loadingComments) return <h1>Loading...</h1>
    const commentBlock = (
        <div className="comments">
            <h3>Comments : ({comments.length})</h3>
            <ol>
                {
                    comments.map(
                    (c, i) => (<li key={i}>{c.Comment}</li>)
                    )
                }    
            </ol>
        </div>
    )
    

    return (
        <div className="container">
            <h1>{book.toUpperCase()}</h1>
            <p>{author}</p>
             {/* you can write variable as well as expressions  Curly braces */}
            {/* {(5 + 5)} : This is the expression */}
            {/* Comments : {showComments ? 'yes' : false} */}
            {/* Comments : {showComments ? 'yes' : null} */}
            {/* Comments : {showComments ? 'yes' : undefined} */}
            {/* Comments : {showComments ? 'yes' : ""} */}
            {/* Comments : {showComments && 'yes'} : if you don't want to put 'no' in false condition then you can put null/false/undefined/emptyString which is not showing nothing in the browser and one alternate option could be : you can put && inplace of ? so that you do not have to worry about false condition*/}
            {/* you can write below div comment function inplace of 'yes' but make sure that should be in (parenthisis) only */}

            {/* Reason : If showComments is falsy (e.g., false, null, undefined, or an empty string), both snippets will not render anything in the browser. This behavior is because React (or JSX in general) does not render null, false, or other falsy values in the output. */}

            {/* <div className="comments">
                <h3>Comments : ({comments.length})</h3>
                <ol>
                    {/* {comments.map((comment, index) => (
                        <li>{comment.id} : {comment.Comment}</li>
                    ))} */}

                    
                    {/* when you create a list using map then you have to provide key to the child prop */}
                    {/* {comments.map((c, i) => (<li key={i}>{c.Comment}</li>))} */}
                    {/* ref : li key={c.id} ??? https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
                     */}
                    
                {/* </ol> */}
            {/* </div >  */}
            {/* if you exernalized code for more readability, then keep all the logic in one variable i.e commentBlock */}
            {showComments&&commentBlock} 
        </div>
    )

}

export default App;