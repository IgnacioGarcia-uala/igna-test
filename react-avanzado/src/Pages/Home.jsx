import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header"

export const Home = () => {
  return (
    <>
        <Header/>
        <main id="content">
            <Outlet />
        </main>
    </>
  )
}
