import PropTypes from 'prop-types'
function CardComponent({ children, reverse }) {
  // return (
  //   // Conditional class :
  //   <div className={`cardComponent ${reverse && 'reverse'}`}>{children}</div>
  // )
  
  return (
    // Conditional styling
    <div className="cardComponent" style={{ backgroundColor: reverse ? "orange" : "blanchedalmond", color: reverse ? "firebrick" : "hotpink" }}>{children}</div>
  )
}
CardComponent.defaultProps = {
  reverse: false,
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  reverse:PropTypes.bool,
}
export default CardComponent