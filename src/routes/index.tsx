import React from "react"
import { AppPaths } from "../constants/appPaths"
import Home from "../pages"
import Layout from "../components/Organisms/Layout"
import { RouteObject } from "react-router-dom"

export const AppRoutes :RouteObject[]= [
    {
        path: "/",
        element: <Layout />,
        children: [
        { index: true, element: <Home/> },
        { path:  AppPaths.home, element:  <Home/> },
      ],
    },
  ]
