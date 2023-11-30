import {FaTimes} from 'react-icons/fa'
// fa means font awesome library
import CardComponent from './shared/CardComponent'

import PropTypes from 'prop-types'

function FeedbackItem(
  // we simply passing item in prop of FeedbackItem function.
    { item }
) {

  const handleClick=() => console.log(item.id);
   
    return (
        <CardComponent reverse={true}>
            <div className="ratingDisplay">
          {item.rating}
          
        </div>
        <button onClick={handleClick} className="close">
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
