import CardComponent from './shared/CardComponent'

function FeedbackItem({ rating, text }) {
   
    return (
        // instead of div className, we can use CardComponent
        // <CardComponent reverse={true} >   // if I want to get rid of reverse 
        <CardComponent>
            {/* these are the children of the Card */} 
       <div className="ratingDisplay">
              {rating}
         </div>
         <div className="textDisplay">
              {text}
         </div>
      </CardComponent>
  )
}

export default FeedbackItem
