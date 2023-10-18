// this will include text and ratings
// write rfce and then press enter key will create function 
import React from 'react'

function FeedbackItem() {
  return (
      <div className='feedbackCard'>
          {/* write .rating-display and then press enter key */}
          <div className="ratingDisplay">
              10
          </div>
          {/* write .text-display and then press enter key */}
          <div className="textDisplay">
              This is an example of Feedback
          </div>
      </div>
  )
}

export default FeedbackItem