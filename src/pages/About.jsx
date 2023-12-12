import React from 'react'

function About() {
  return (
      <div>
          <h1 className="text-3xl mb-4 text-success">Github Finder </h1>
          <p className= 'mb-4 text-1xl font-light'>
          
          Application is React app built by Tejaswini Vekaria.
              all the static data you can keep it here.
              This app is using 
              <strong><a href="https://daisyui.com/docs/install/"> daisyUI.</a></strong>
              <br />
              <a href='https://github.com/bradtraversy/github-finder-app/tree/main'>
              {''}
                  **Github Ref**
                  </a>{''}
          </p>
          <p className='text-lg text-gray-400'>
        Version <span className='text-white bg-blue-600'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white bg-blue-600' href='https://daisyui.com/docs/utilities/'>
          Tejaswini
        </a>
      </p>
    </div>
  )
}

export default About