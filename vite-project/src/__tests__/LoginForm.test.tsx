import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../components/LoginForm'


describe('LoginForm', () => {
  it('deve chamar onLogin ao clicar no botão', async () => {
  const mockLogin = jest.fn().mockResolvedValue(false)

  const email = process.env.VITE_TEST_EMAIL || ''
  const password = process.env.VITE_TEST_PASSWORD || ''

  render(<LoginForm onLogin={mockLogin} loading={false} error={null} />)

  await userEvent.type(screen.getByLabelText(/email/i), email)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  await userEvent.click(
  screen.getByRole('button', { name: /login/i })
)

  expect(mockLogin).toHaveBeenCalledWith(email, password)

  })
})