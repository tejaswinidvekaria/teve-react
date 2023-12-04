import React from 'react'
import PropTypes from 'prop-types'
// here, feedback is the entire array
function FeedbackStat({ feedback }) {
    
    let avg = feedback.reduce((accumulator, currentValue) => { return accumulator + currentValue.rating }, 0) / feedback.length;
    console.log(avg);
    avg = avg.toFixed(0); // It shows how many decimal points you want to display
    // avg = avg.toFixed(1).replace(/[.,]0$/, ''); 
  return (
      <div className='feedback-stat'>
          <h4>{feedback.length} Reviews</h4>
          <h4>Average Ratings : {isNaN(avg)?0:avg}</h4>
    </div>
  )
}

FeedbackStat.propsTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStat