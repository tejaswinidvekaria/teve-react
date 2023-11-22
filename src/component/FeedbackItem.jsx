import CardComponent from './shared/CardComponent'

function FeedbackItem(
  // we simply passing item in prop of FeedbackItem function.
    { item }
) {
   
    return (
        <CardComponent reverse={true}>
            <div className="ratingDisplay">
              {item.rating}
            </div>
            <div className="textDisplay">
              {item.text}
            </div>
      </CardComponent>
  )
}

export default FeedbackItem
