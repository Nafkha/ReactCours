import React from 'react'
import './navbar.css'

export default function Navbar(props) {
    
    
    
  return (
    <ul className='main_Menu'>
        {props.navItems.map((item)=><li><a href='https://google.com'>{item.title}</a>
        {item.dropdown_elements?<ul className='dropdown_Menu'>{item.dropdown_elements.map(el=><li className='dropdown_element'>{el}</li>)}</ul>:null}
        </li>)}


    </ul>
  )
}
