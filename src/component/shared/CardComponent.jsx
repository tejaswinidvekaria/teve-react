function CardComponent({children,reverse}) {
  return (
    // Conditional class : 
    <div className={`cardComponent ${reverse && 'reverse'}`}>{children}</div>
    // $<--if, {} <-- for template string
    //  && <-- Then, 'reverse'<-class reverse
  )
}

export default CardComponent