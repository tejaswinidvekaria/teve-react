import FeedbackItem from './FeedbackItem';;
function FeedbackList({ feedbackList }) { 
    console.log(feedbackList); 
    if (!feedbackList || feedbackList.length === 0) { 
        return "No feedback found yet.";
    }
    return (
        <div className='feedback-list'>
            {feedbackList.map((item) => <FeedbackItem key={item.id} item={item} />)
            }
            
        </div>
    )
}

export default FeedbackList