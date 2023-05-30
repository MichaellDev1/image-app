import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css'
import Header from './components/Header';

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Search />} path='/search/:keyword' />
    </Routes>
  </BrowserRouter>
}

export default App
