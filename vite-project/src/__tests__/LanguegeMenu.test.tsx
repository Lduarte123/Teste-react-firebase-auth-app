import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LanguageMenu from '../components/LanguageMenu'
import i18n from '../i18n'

// mock do i18n
jest.mock('../i18n', () => ({
  language: 'pt',
  changeLanguage: jest.fn(),
}))

describe('LanguageMenu', () => {
  it('deve renderizar o idioma atual', () => {
    render(<LanguageMenu />)

    expect(screen.getByText('Português (BR)')).toBeInTheDocument()
  })

  it('deve abrir o menu ao clicar no botão', async () => {
    render(<LanguageMenu />)

    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(screen.getByText('English (US)')).toBeInTheDocument()
    expect(screen.getByText('Español (ES)')).toBeInTheDocument()
  })

  it('deve mudar o idioma ao clicar em uma opção', async () => {
    render(<LanguageMenu />)

    const button = screen.getByRole('button')
    await userEvent.click(button)

    const englishOption = screen.getByText('English (US)')
    await userEvent.click(englishOption)

    expect(i18n.changeLanguage).toHaveBeenCalledWith('en')
  })

  it('deve fechar o menu após selecionar um idioma', async () => {
    render(<LanguageMenu />)

    const button = screen.getByRole('button')
    await userEvent.click(button)

    const englishOption = screen.getByText('English (US)')
    await userEvent.click(englishOption)

    expect(screen.queryByText('English (US)')).not.toBeInTheDocument()
  })
})