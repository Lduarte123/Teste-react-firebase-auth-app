import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HomePage from '../pages/HomePage'

// mocks
const mockNavigate = jest.fn()
const mockLogout = jest.fn()

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

jest.mock('../hooks/useAuth', () => ({
  useAuth: () => ({
    logout: mockLogout,
  }),
}))

jest.mock('../services/firebase', () => ({
  auth: {
    currentUser: {
      displayName: 'Lucas',
      email: 'lucas@email.com',
    },
  },
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, params?: any) => {
      if (key === 'welcomeUser') {
        return `welcome ${params?.name}`
      }
      return key
    },
  }),
}))

// mock dos componentes filhos
jest.mock('../components/Header', () => ({ children }: any) => (
  <div>{children}</div>
))

jest.mock('../components/LogoutButton', () => ({ onLogout }: any) => (
  <button onClick={onLogout}>logout</button>
))

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve renderizar o nome do usuário', () => {
    render(<HomePage />)

    expect(screen.getByText(/welcome Lucas/i)).toBeInTheDocument()
  })

  it('deve usar email se não houver displayName', () => {
    jest.mocked(require('../services/firebase').auth).currentUser = {
      displayName: null,
      email: 'teste@email.com',
    }

    render(<HomePage />)

    expect(screen.getByText(/welcome teste@email.com/i)).toBeInTheDocument()
  })

  it('deve fazer logout e redirecionar', async () => {
    mockLogout.mockResolvedValue(undefined)

    render(<HomePage />)

    const button = screen.getByRole('button', { name: /logout/i })

    await userEvent.click(button)

    expect(mockLogout).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })
})