// function Header(props) { 
// or instead of passing props here, you can destructure it with {}, and as long as you know what props are being passed in such as anyText, we can pull it out and we can directly us anyText instead of props.anyText
function Header({ anyText }) { 
  // props is gonna be an object with any props that are passed in.

  return (
      <header>
      <div className="container">
         {/* And you need to catch that prop into the component */}
        {/* I am putting something dynamic here that is why using {} in h1  */}
        {/* <h1>{props.anyText}</h1> */}
{/* or */}
        <h1>{anyText}</h1>
        </div>
      </header>
    //   you can not write anything after this
  )
}

export default Header