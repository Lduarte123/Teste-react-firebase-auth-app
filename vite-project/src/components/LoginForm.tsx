import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import { useTranslation } from 'react-i18next' 

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<boolean>
  loading: boolean
  error: string | null
}

export default function LoginForm({ onLogin, loading, error }: LoginFormProps) {
  const { t } = useTranslation() 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await onLogin(email, password)
  }

  return (
    <Box
      sx={{
        width: 320,
        margin: '60px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6">{t('login')}</Typography>

      {error && (
        <Alert severity="error">
          {error} 
        </Alert>
      )}

      <TextField
        label={t('email')}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        fullWidth
        size="small"
      />

      <TextField
        label={t('password')}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
        size="small"
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? t('loggingIn') : t('login')}
        </Button>

        <Link href="#" variant="body2" underline="hover">
          {t('forgotPassword')}
        </Link>
      </Box>
    </Box>
  )
}