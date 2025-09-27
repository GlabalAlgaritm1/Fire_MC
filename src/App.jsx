import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Home from './pages/Home'
import Search from './pages/Search'
import FilmDetail from './pages/FilmDetail'
import AnimeDetail from './pages/AnimeDetail'
import SerialDetail from './pages/SerialDetail'
import MultfilmDetail from './pages/MultfilmDetail'
import Profil from './components/Profil'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route element={<Mainlayout />}>
          <Route path='/profil' element={<Profil />} />
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/film/:id' element={<FilmDetail />} /> 
          <Route path='/serial/:id' element={<SerialDetail />} />

          <Route path='/anime/:id' element={<AnimeDetail />} />
          <Route path='/multfilm/:id' element={<MultfilmDetail />} />

        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App