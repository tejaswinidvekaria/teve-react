import Header from "./component/Header";
// we don't need this FeedbackItem here as we don't need a single item however we need bunch of items, that's why we will use FeedbackList.
// import FeedbackItem from "./component/FeedbackItem";
import { useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./component/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackList feedbackList={feedback} />
            </div>
        </>
    )

}
export default App;