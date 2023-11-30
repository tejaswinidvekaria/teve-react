import React from 'react'
// here, feedback is the entire array
function FeedbackStat({ feedback }) {
    
    let avg = feedback.reduce((accumulator, currentValue) => { return accumulator + currentValue.rating }, 0) / feedback.length;
    console.log(avg);
    avg = avg.toFixed(0); // It shows how many decimal points you want to display
  return (
      <div className='feedback-stat'>
          <h4>{feedback.length} Reviews</h4>
          <h4>Average Ratings : {isNaN(avg)?0:avg}</h4>
    </div>
  )
}

export default FeedbackStat