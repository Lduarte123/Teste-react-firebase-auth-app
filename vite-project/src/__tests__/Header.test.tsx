import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

// mock do LanguageMenu
jest.mock('../components/LanguageMenu', () => () => <div>LanguageMenu</div>)

describe('Header', () => {
  it('deve renderizar o logo', () => {
    render(<Header />)

    const logo = screen.getByAltText('fly.id')

    expect(logo).toBeInTheDocument()
  })

  it('deve renderizar o LanguageMenu quando showLanguage for true', () => {
    render(<Header showLanguage />)

    expect(screen.getByText('LanguageMenu')).toBeInTheDocument()
  })

  it('não deve renderizar o LanguageMenu quando showLanguage for false', () => {
    render(<Header showLanguage={false} />)

    expect(screen.queryByText('LanguageMenu')).not.toBeInTheDocument()
  })

  it('deve renderizar children', () => {
    render(
      <Header>
        <button>Logout</button>
      </Header>
    )

    expect(screen.getByText('Logout')).toBeInTheDocument()
  })
})