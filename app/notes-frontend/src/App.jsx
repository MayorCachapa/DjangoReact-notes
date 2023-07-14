import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from './components/header'
import { NotesListPage } from './pages/NotesListPage'
import { NotePage } from './pages/NotePage'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <Router>
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="note/:id" element={<NotePage />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
