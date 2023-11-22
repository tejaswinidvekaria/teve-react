import CardComponent from './shared/CardComponent'

import PropTypes from 'prop-types'

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

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
