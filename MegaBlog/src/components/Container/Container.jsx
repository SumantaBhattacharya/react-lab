import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container
//  The children prop in React is a special prop that represents the content nested inside a component. 