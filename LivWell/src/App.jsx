import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Section1 from '../component/section1'
import Section3 from '../component/section3'
import Section4 from '../component/section4'
import Section5 from '../component/section5'
import Section6 from '../component/section6'
import Properties from '../component/rentPage/properties'
import RentS1 from '../component/rentPage/rentS1'
import WishListItems from '../component/WishListPage/WishListItems'
import PostProperty from '../component/PostProperty/PostProperty'
import { WishlistProvider } from '../component/WishListPage/Wishlist'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
          <Navbar />
          <Section1 />
          <Properties />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
      </>
    },
    {
      path: '/rent/:id',
      element:<><Navbar/><RentS1/></>
    },
    {
      path: '/wishlist',
      element: <>
        <Navbar />
          <WishListItems />
        <Footer />
      </>
    },
    {
      path: '/post-property',
      element: <>
        <Navbar />
          <PostProperty />
        <Footer />
      </>
    }
  ])

  return (
    <>
    <WishlistProvider>
      <RouterProvider router={router} />
      </WishlistProvider>
    </>
  )
}

export default App