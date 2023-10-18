import Header from "./component/Header";
function App() {

    return (
        <>
            {/* pass both of these props into the Header Component arguments, but we're not gonna do this, we pass both of these props into the defaultProps*/}
            <Header bgColor='red' textColor='blue'/>
            <div className="container">
                <h4>This is app for billioners</h4>
            </div>
        </>
    )

}
export default App;