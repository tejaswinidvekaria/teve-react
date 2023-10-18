import { useState } from 'react'

function FeedbackItem() {
    // [what is this function returns : there are 2 pieces]
    // 1. name of this piece of state : i.e rating/text/anything else
    // 2. fuction to update this piece of state : setWhatEverNameYouWant
    // const []=useState(default value) // this useState is a function
    const [rating, setRating] = useState(5);
    const [text, setText] = useState("Good :)");
    const one = () => {
        setRating(1);
    }
    const two = () => {
        setRating(() => { 
            // Instead of passing a value I am passing a function here.
            return 2;
        });
    }
    const three = () => {
        setRating((prev) => { 
            // if you want previous value & do some operations then do it this way
            console.log("previous value is : ",prev)
            return prev+1;
        });
    }
    const four = () => {
        setRating(4);
    }
    const five = () => {
        setRating(5);
    }
  return (
      <div className='feedbackCard'>
          {/* write .rating-display and then press enter key */}
          <div className="ratingDisplay">
              {/* name of piece of state */}
              {rating}
          </div>
          {/* write .text-display and then press enter key */}
          <div className="textDisplay">
              {text}
          </div>
          <image src="/Users/tejaswinivekaria/js-react-workspace/src/component/star.png" alt="one" onClick={one} style={{cursor:'pointer'}}>1</image>
          <button onClick={two}>2</button>
          <button onClick={three}>3</button>
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
      </div>
  )
}

export default FeedbackItem