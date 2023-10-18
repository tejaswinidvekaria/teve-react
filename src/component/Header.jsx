import PropTypes from 'prop-types'
// propType : "Typechecking for props i.e string/numbers/functions" : impt enter
function Header({ anyText }) { 
  return (
      <header>
      <div className="container">
        <h1>{anyText}</h1>
        </div>
      </header>
  )
}

// Setting ups default props
Header.defaultProps = {
  anyText: "Hello Happy Customers"
}

// NameOfComponent.defaultProps ={
  // setParticularProps:"value",
// }


Header.prototype = {
  // You don't need to use PropTypes instead of that you can use typeScript which is superset of JavaScript which has static type checking just like Java.
  anyText: PropTypes.string,
}
export default Header