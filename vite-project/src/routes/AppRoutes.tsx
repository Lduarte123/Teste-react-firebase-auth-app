import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import { auth } from '../services/firebase'

function PrivateRoute({ children }: { children: React.ReactElement }) {
  const user = auth.currentUser
  return user ? children : <Navigate to="/login" replace />
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}