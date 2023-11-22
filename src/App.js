import Header from "./component/Header";
import FeedbackItem from "./component/FeedbackItem";
import CardComponent from "./component/shared/CardComponent";

function App() {
    const [feedback, setFeedback] = useState([[
        {
            id: 1,
            rating: 10,
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            rating: 10,
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            rating: 10,
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ]])
    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackItem/>
            </div>
        </>
    )

}
export default App;