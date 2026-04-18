import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Header from '../components/Header'
import LogoutButton from '../components/LogoutButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { auth } from '../services/firebase'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const { t } = useTranslation()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const userName = auth.currentUser?.displayName || auth.currentUser?.email

  return (
    <>
      <Header showLanguage>
  <LogoutButton onLogout={handleLogout} />
</Header>


      <Box sx={{ padding: 4 }}>
        <Typography variant="h6">
          {t('welcomeUser', { name: userName })}
        </Typography>
      </Box>
    </>
  )
}