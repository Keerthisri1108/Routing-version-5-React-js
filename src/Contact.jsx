import React from 'react'
import{Link,Outlet} from 'react-router-dom'


const Contact = () => {

    //<outlet/>=>outlet is placed inside and to render child routes inside a parent layout.
  return (
    <div>
      <h2>Contact Page</h2>
      <Link to ='/contact/mobile'>Click here for Mobile</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
