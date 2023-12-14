import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>home</h1>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/tasks' element={<h1>tasks</h1>}></Route>
        <Route path='/add-tasks' element={<h1>add-tasks</h1>}></Route>
        <Route path='/tasks/:id' element={<h1>tasks-id</h1>}></Route>
        <Route path='/profile' element={<h1>profile</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
