import Alert from '@mui/material/Alert'
import { useTranslation } from 'react-i18next'

interface ErrorAlertProps {
  error: string | null
}

export default function ErrorAlert({ error }: ErrorAlertProps) {
  const { t } = useTranslation()

  if (!error) return null

  return (
    <Alert severity="error">
      {t(`errors.${error}`, error)} 
    </Alert>
  )
}