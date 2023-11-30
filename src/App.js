import Header from "./component/Header";
import { useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./component/FeedbackList";
import FeedbackStat from "./component/FeedbackStat";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete")) { 
            setFeedback(feedback.filter((item)=>item.id !== id));
        }
    }
    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackStat feedback={feedback} />
                <FeedbackList feedbackList={feedback}
                handleDelete={deleteFeedback}/>
            </div>
        </>
    )

}
export default App;