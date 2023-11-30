import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList({feedbackList}) {
    console.log(feedbackList); 
    if (!feedbackList || feedbackList.length === 0) { 
        return "No feedback found yet.";
    }
    return (
        <div className='feedback-list'>
            {
                feedbackList.map((item) =>
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={(id)=>console.log(id)}
                    />)
            }
            
        </div>
    )
}

FeedbackList.propTypes = {

    feedbackList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    })
    )
}
export default FeedbackList