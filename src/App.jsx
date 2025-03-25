import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inbox from './pages/Inbox'
import Drafts from './pages/Drafts'
import SentItems from './pages/SentItems'
import Trash from './pages/Trash'
import Sidebar from './components/Sidebar'
import ViewMail from './pages/ViewMail'
import { Navigate } from 'react-router-dom'
import Demo from './pages/Demo'
// import { useDispatch } from 'react-redux'
// import {getStu} from './redux/StudentSlice'

const App = () => {
  


  return (
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <Routes>
                <Route index element={<Navigate to="/inbox" />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='sent' element={<SentItems />} />
                <Route path='inbox/:id' element={<ViewMail />} />
                <Route path='drafts' element={<Drafts />} />
                <Route path='sentitems' element={<SentItems />} />
                <Route path='demo' element={<Demo />} />
                <Route path='trash' element={<Trash />} />
            </Routes>        
        </div>
    </div>

  )
}

export default App

// git clone https://github.com/jamesjoe/gmail.git

