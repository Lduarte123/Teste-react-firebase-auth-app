import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import LanguageMenu from './LanguageMenu'
import logo from '../assets/Fly.id.png'

interface HeaderProps {
  showLanguage?: boolean
  children?: React.ReactNode
}

export default function Header({ showLanguage, children }: HeaderProps) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <Box sx={{ flex: 1 }} />

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={logo}
            alt="fly.id"
            style={{ height: 50 }} 
          />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          {showLanguage && <LanguageMenu />}
          {children}
        </Box>

      </Toolbar>
    </AppBar>
  )
}