import CardComponent from './shared/CardComponent'

function FeedbackItem({ rating, text }) {
   
    return (
        <CardComponent>
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
