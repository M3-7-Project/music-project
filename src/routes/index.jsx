import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import ProducerPage from '../pages/ProducerPage';
import Production from '../pages/Production';
import Dashboard from '../pages/Dashboard';
import { Navigate, Routes, Route } from "react-router-dom"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/producer-login' element={<Login />} />
            <Route path='/user-register' element={<Register />} />
            <Route path='/producer/:id' element={<ProducerPage />} />
            <Route path='/album/:id' element={<Production />} />
            <Route path='/music/:id' element={<Production />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<Navigate to='/landing' />} />
        </Routes>
    )
}

export default RoutesMain;