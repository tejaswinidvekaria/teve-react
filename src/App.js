import Header from "./component/Header";
function App() {

    return (
        <>
            {/* you pass the prop anyText */}
            <Header anyText="Hello Happy Customers"/> 
            <div className="container">
                <h4>This is app for billioners</h4>
            </div>
        </>
    )

}

export default App;