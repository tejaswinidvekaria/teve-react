import PropTypes from 'prop-types'
function Header({ anyText }) { 
  return (
    // for inline styling : style="{{double-curly-braces}} "
    // whatever the properties in the css with hyphen is in camelCase in JavaScript i.e css : background-color == js: backgroundColor
      <header style={{backgroundColor:'brown', color : 'orange' }}>
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