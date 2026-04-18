import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import i18n from '../i18n'

const languages = [
  { label: 'Português (BR)', value: 'pt' },
  { label: 'English (US)', value: 'en' },
  { label: 'Español (ES)', value: 'es' },
]

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (value?: string) => {
    if (value) {
      i18n.changeLanguage(value)
    }
    setAnchorEl(null)
  }

  const currentLang = i18n.language

  const currentLabel =
    languages.find(l => l.value === currentLang)?.label || 'Language'

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        {currentLabel}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {languages.map(lang => (
          <MenuItem
            key={lang.value}
            selected={lang.value === currentLang}
            onClick={() => handleClose(lang.value)}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}