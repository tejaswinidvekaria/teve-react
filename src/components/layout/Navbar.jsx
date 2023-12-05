import React from 'react'
// we are bring in GitHub Logo from font awesome
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// we have a title pass in for the logo
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
              <div className="flex-none px-2 mx-2">
                  <FaGithub className='inline pr-2 text-3xl' />
                  <Link to='/' className='text-lg font-bold align-middle'>
                      {title}
                  </Link>
              </div>
        </div> 
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar