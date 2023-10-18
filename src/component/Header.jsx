import PropTypes from 'prop-types'
function Header({ anyText }) {
  // We can put style in the variable, and pass it in the single curly bracket in the style of header. 
  const headerStyles = {
    backgroundColor:'maroon', color: 'green'
      
  }
  return (
      <header style={headerStyles}>
      <div className="container">
        <h1>{anyText}</h1>
        </div>
      </header>
  )
}
Header.defaultProps = {
  anyText: "Hello Happy Customers"
}

Header.prototype = {
  anyText: PropTypes.string,
}
export default Header