function FeedbackList({feedbackList }) { 
    console.log(feedbackList); 
    if (!feedbackList || feedbackList.length === 0) { 
        return "No feedback found yet.";
    }
    return (
        <div>
        List
        </div>
    )
}

export default FeedbackList