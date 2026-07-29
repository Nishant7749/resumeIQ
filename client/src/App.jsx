import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

export default function App() {

    return(
        <>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        </>
    )
}