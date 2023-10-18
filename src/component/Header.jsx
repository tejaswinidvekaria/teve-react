import PropTypes from 'prop-types'
function Header({ anyText,bgColor,textColor }) {
  const headerStyles = {
    backgroundColor:bgColor, color: textColor
      
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