import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loading, error } = useAuth()

  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    const success = await login(email, password)
    if (success) {
      navigate('/home')
    }
    return success
  }

  return (
    <>
      <Header showLanguage />
      <LoginForm onLogin={handleLogin} loading={loading} error={error} />
    </>
  )
}