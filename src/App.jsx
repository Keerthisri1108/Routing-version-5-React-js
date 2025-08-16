import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'
import NotFound from './NotFound'
import Mobile from './Mobile'
// Routing in JavaScript (React) Definition:

// Routing in JavaScript (especially in React) refers to the process of navigating between different components or pages in a single-page application (SPA) without reloading the entire page. This is typically managed using a routing library like react-router-dom.
const App = () => {
  return(
    
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>      
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/mobile' element={<Mobile/>}></Route>
    <Route path='/users' element={<Users/>}/>
    <Route path='*' element={<NotFound/>}/>

  {/* <Outlet /> is used in React Router to render child routes inside a parent layout. It enables nested routing and helps maintain consistent UI structures like headers and sidebars while swapping out the main content
 */}
  
  </Routes>
  <ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  <li><Link to='/contact'>Contact</Link></li>
  <li><Link to='/Users'>Users</Link></li>
  

</ul>
<hr/>  
  </BrowserRouter>

 

  )
}

export default App
