import Header from "./component/Header";
function App() {

    return (
        <>
            {/* Let's get rid of this anyText here because we may not want to pass something explicitely in, so we can setting up default props in Header Component itself*/}
            {/* <Header anyText="Hello Happy Customers"/>  */}
            {/* <Header anyText={true} />  if I pass boolean value here and if there is PropTypes.String then this will gives you a warning that it expected string and we have supplied to boolean, and for number it works Need to know why, and this is just the extra type checks*/}
            {/* Here, in the above component no prop passed it, so it will take defaultProps */}
            <Header/>
            <div className="container">
                <h4>This is app for billioners</h4>
            </div>
        </>
    )

}

export default App;