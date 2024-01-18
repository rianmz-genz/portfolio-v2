import React from 'react'

const Container = ({children}) => {
  return (
    <div className="px-7 flex justify-center">
        <div className="w-full sm:max-w-lg lg:max-w-[650px]">{children}</div>
    </div>
  )
}

export default Container