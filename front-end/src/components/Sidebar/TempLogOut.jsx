import React from 'react'


const TempLogOut = () => {
  function handleLogOut() {
    localStorage.removeItem('Email')
    window.location.reload(false)
  }
  return (
    <div className='flex mx-2 gap-2 font-bold'>
      <div>Hello {localStorage.getItem('Email')}!</div>
      <button className='bg-white hover:invert' onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default TempLogOut