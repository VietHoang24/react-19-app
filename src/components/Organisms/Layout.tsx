import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Molecules/Header'

type LayoutProps = {
}
const Layout = ({}:LayoutProps) => {
  return (
    <>
    <Header/>
    <Outlet />
    </>
)
}

export default Layout