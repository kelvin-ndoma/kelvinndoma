import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom"
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/Admin/Dashboard'
import ManageTasks from './pages/Admin/ManageTasks'
import CreateTask from './pages/Admin/CreateTask'
import ManageUsers from './pages/Admin/ManageUsers'
import UserDashboard from './pages/User/UserDashboard'
import MyTasks from './pages/User/MyTasks'
import ViewTaskDetails from './pages/User/ViewTaskDetails'
import UserProvider, { UserContext } from './context/userContext'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Public/Navbar'
import HomePage from './pages/PublicFacing/Home'
import AboutPage from './pages/PublicFacing/About'
import DigitalMarketing from './pages/PublicFacing/DigitalMarketing'
import WebDevelopment from './pages/PublicFacing/WebDevelopment'
import ContactPage from './pages/PublicFacing/Contact'
import Consultations from './pages/PublicFacing/Consultations'

const App = () => {
  return (
    <UserProvider>
      <Router>
        {/* Navbar will handle its own visibility based on auth status */}
        <Navbar />
        
        <div className="min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/website-development" element={<WebDevelopment />} />
            <Route path="/services/consultation" element={<Consultations />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Auth Routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />

            {/* Protected Admin Routes */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path='/admin/dashboard' element={<Dashboard />} />
              <Route path='/admin/tasks' element={<ManageTasks />} />
              <Route path='/admin/create-task' element={<CreateTask />} />
              <Route path='/admin/users' element={<ManageUsers />} />
            </Route>

            {/* Protected User Routes */}
            <Route element={<PrivateRoute allowedRoles={["user"]} />}>
              <Route path='/user/dashboard' element={<UserDashboard />} />
              <Route path='/user/tasks' element={<MyTasks />} />
              <Route path='/user/task-details/:id' element={<ViewTaskDetails />} />
            </Route>

            {/* Handle root redirect based on auth status */}
            <Route path='/' element={<RootRedirect />} />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          }
        }} 
      />
    </UserProvider>
  )
}

// Handles root redirect logic
const RootRedirect = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (user) {
    return user.role === "admin" 
      ? <Navigate to="/admin/dashboard" replace /> 
      : <Navigate to="/user/dashboard" replace />;
  }

  return <Navigate to="/" replace />;
};

export default App;