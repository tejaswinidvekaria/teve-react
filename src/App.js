import Header from "./component/Header";
import FeedbackItem from "./component/FeedbackItem";
// import CardComponent from "./component/shared/CardComponent";

function App() {

    return (
        <>
            <Header bgColor='yellow' textColor='blue'/>
            <div className="container">
                <FeedbackItem rating={1} text={"Great experience"} />
                {/* <CardComponent>
                    This is CardComponent
                </CardComponent> */}
            </div>
        </>
    )

}
export default App;

// state is just a data : there are 2 types of states : 
// 1. component level state : associated with the specific component (No other components need to use that data)
// 2. App - level/global state : share the state among multiple components.
// state of react is immutable, you can't change it directly but it has to be set.

