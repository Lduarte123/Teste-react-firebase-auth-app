import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from '../pages/LoginPage'

// mocks
const mockNavigate = jest.fn()
const mockLogin = jest.fn()

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

jest.mock('../hooks/useAuth', () => ({
  useAuth: () => ({
    login: mockLogin,
    loading: false,
    error: null,
  }),
}))

// mock dos componentes filhos
jest.mock('../components/Header', () => () => <div>Header</div>)

jest.mock('../components/LoginForm', () => (props: any) => (
  <div>
    <button onClick={() => props.onLogin('teste@email.com', '123456')}>
      login
    </button>
    {props.error && <span>{props.error}</span>}
  </div>
))

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve renderizar o Header e LoginForm', () => {
    render(<LoginPage />)

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('deve navegar para /home quando login for bem-sucedido', async () => {
    mockLogin.mockResolvedValue(true)

    render(<LoginPage />)

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(mockLogin).toHaveBeenCalledWith('teste@email.com', '123456')
    expect(mockNavigate).toHaveBeenCalledWith('/home')
  })

  it('não deve navegar quando login falhar', async () => {
    mockLogin.mockResolvedValue(false)

    render(<LoginPage />)

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(mockLogin).toHaveBeenCalled()
    expect(mockNavigate).not.toHaveBeenCalled()
  })
})