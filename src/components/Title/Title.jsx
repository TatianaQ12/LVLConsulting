import React from 'react'

function Title({text}){
  return (
    <div className="flex mt-8">
    <div className="flex-none ..."></div>
    <div className="grow text-left text-3xl font-bold text-indigo-900">
      {text}
    </div>
    <div className="flex-none w-14 h-14 ..."></div>
  </div>
  )
}
export default Title;
