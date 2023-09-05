import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Store/store'

const Navigation = () => {
  return (
<> 
<Provider store={store}>
<NavBar/>
<main>
    <Outlet/>
</main>
</Provider>
</>

  )
}

export default Navigation