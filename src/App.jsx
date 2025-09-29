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
import Page404 from './pages/Page404'
import Favourite from './pages/Favourite'
import AllFilm from './pages/AllFilm'
import Sozlamalar from './pages/Sozlamalar'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home />} />

          <Route path='/sozlamalar' element={<Sozlamalar />} />


          <Route path='/profil' element={<Profil />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/allfilm' element={<AllFilm />} />

          <Route path='/search' element={<Search />} />
          <Route path='/film/:id' element={<FilmDetail />} /> 
          <Route path='/serial/:id' element={<SerialDetail />} />

          <Route path='/anime/:id' element={<AnimeDetail />} />
          <Route path='/multfilm/:id' element={<MultfilmDetail />} />

        </Route>
        <Route path='*' element={<Page404/>}/>
      </>
    )
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App