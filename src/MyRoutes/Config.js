import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Content from '../pages/Content'
import DetailPage from '../pages/DetailPage'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'


const Config = (props) => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/detail' element={<DetailPage/>}/> 
        <Route path='/content' element={<Content/>}/> 
        <Route path='/search' element={<SearchResult/>}/> 
    </Routes>
    </>
  )
}

export default Config
