import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/sections/AboutUs';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Courts from './components/sections/Courts';
import Reviews from './components/sections/Reviews';
import Footer from './components/sections/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BookingPage from './components/booking/BookingPage';
import AdminDashboard from './components/dashboard/AdminDashboard';
import ManagerDashboard from './components/dashboard/ManagerDashboard';
import ClientDashboard from './components/dashboard/ClientDashboard';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Componente de ruta protegida
const ProtectedRoute = ({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated || !user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

// Componente para redireccionar al dashboard según el rol
const DashboardRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
    case 'admin':
      return <Navigate to="/admin" />;
    case 'encargado':
      return <Navigate to="/manager" />;
    case 'cliente':
      return <Navigate to="/client" />;
    default:
      return <Navigate to="/" />;
  }
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Toaster position="top-right" />
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={
                <>
                  <Navbar />
                  <main>
                    <Hero />
                    <AboutUs />
                    <WhyChooseUs />
                    <Courts />
                    <Reviews />
                  </main>
                  <Footer />
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Redirección al dashboard */}
              <Route path="/dashboard" element={<DashboardRedirect />} />

              {/* Rutas protegidas de administrador */}
              <Route path="/admin/*" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />

              {/* Rutas protegidas de encargado */}
              <Route path="/manager/*" element={
                <ProtectedRoute allowedRoles={['admin', 'encargado']}>
                  <ManagerDashboard />
                </ProtectedRoute>
              } />

              {/* Rutas protegidas de cliente */}
              <Route path="/client/*" element={
                <ProtectedRoute allowedRoles={['admin', 'encargado', 'cliente']}>
                  <ClientDashboard />
                </ProtectedRoute>
              } />

              {/* Ruta de reservas */}
              <Route path="/booking/*" element={
                <ProtectedRoute allowedRoles={['admin', 'encargado', 'cliente']}>
                  <BookingPage />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;