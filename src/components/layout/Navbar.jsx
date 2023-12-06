import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
    return (
        //   daisyui gives us some padding and all through this navbar class
        // mb-12 is the margin bottom
        // shadow-lg gives us some drop shadows
        // bg-neutral is for the background is also from one of the daisyui classes
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            {/* mx-auto is doing margin auto left and right. i.e.here it affects on logo */}
            <div className='container mx-auto'>
                {/* adding padding and margin using classes px-2 and mx-2 respectively */}
                <div className="flex-none px-2 mx-2">
                    {/* we are using inline class because we have text next to it 
                    pr-2 means padding right 2
                    text-3xl makes the logo little bigger.
                    */}
                  <FaGithub className='inline pr-2 text-3xl' />
                  {/* we wonna wrap up the title in a link as well 
                  The 'to' prop specifies the target URL or path that the link should navigate to. In this case, it is set to '/', which typically represents the root or home path.
                  */}
                  <Link to='/' className='text-lg font-bold align-middle'>
                      {title}
                  </Link>
              </div>
                <div className="flex-1 px2 mx-2">
                    {/* we wonna link moved over to right */}
                    <div className="flex justify-end">
                        {/* btn-ghost class for a link that has a hover effect 
                        btn-sm which is small
                        */}
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                    Home
                </Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                    About
                </Link>
                </div>
            </div>
        </div> 
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder Application',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar