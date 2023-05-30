import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import SinglePhoto from './pages/SinglePhoto';
import './App.css'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Search />} path='/search/:keyword' />
      <Route element={<SinglePhoto />} path='/photo/:id' />
    </Routes>
  </BrowserRouter>
}

export default App
