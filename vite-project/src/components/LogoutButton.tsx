import { useState } from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

interface LogoutButtonProps {
  onLogout: () => Promise<void> 
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    await onLogout()
    setLoading(false)
  }

  return (
    <Button color="inherit" onClick={handleClick} disabled={loading}>
      {loading ? t('loggingOut') : t('logout')}
    </Button>
  )
}