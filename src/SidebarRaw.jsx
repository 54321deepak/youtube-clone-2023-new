
import React from 'react'
import './SidebarRaw.css'

function SidebarRaw({selected,Icon,title}) {
  return (
    <div className={`sidebarRaw  ${selected && "selected"}`}> {/*"selected" is a class */}
    <Icon className="sidebarRaw_icon"/>  
      <h2 className='sidebarRaw_title'>{title}</h2>
    </div>
  )
}

export default SidebarRaw
