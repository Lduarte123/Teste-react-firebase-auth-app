import { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../services/firebase'

interface UseAuthReturn {
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      return true
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('userNotFound')
          break
        case 'auth/wrong-password':
          setError('wrongPassword')
          break
        case 'auth/invalid-email':
          setError('invalidEmail')
          break
        case 'auth/invalid-credential':
          setError('invalidCredentials')
          break
        default:
          setError('genericError')
      }
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    await signOut(auth)
  }

  return { loading, error, login, logout }
}