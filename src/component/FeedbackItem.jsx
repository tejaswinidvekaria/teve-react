import {FaTimes} from 'react-icons/fa'
// fa means font awesome library
import CardComponent from './shared/CardComponent'

import PropTypes from 'prop-types'

function FeedbackItem(
  // we simply passing item in prop of FeedbackItem function.
    { item,handleDelete }
) {
   
    return (
        <CardComponent reverse={true}>
            <div className="ratingDisplay">
          {item.rating}
          
        </div>
        <button onClick={(id)=>handleDelete(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
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
