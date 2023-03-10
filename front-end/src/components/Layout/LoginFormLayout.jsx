import React from 'react'

function LoginFormLayout(props){
  return (
      <div className={`w-full fixed z-50 left-0 top-1/2 flex justify-center items-center ${props.toggle? "":"hidden"}`}>
        <div className='w-1/5 bg-white absolute border-box border border-black'>
          <div className='px-4 pt-10 pb-20'>
              {props.children}
          </div>
        </div>
      </div>  )
}

export default LoginFormLayout