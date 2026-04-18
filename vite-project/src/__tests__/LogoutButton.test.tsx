import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LogoutButton from '../components/LogoutButton'

// mock do i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('LogoutButton', () => {
  it('deve renderizar o texto logout', () => {
    render(<LogoutButton onLogout={jest.fn()} />)

    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })

  it('deve chamar onLogout ao clicar', async () => {
    const mockLogout = jest.fn().mockResolvedValue(undefined)

    render(<LogoutButton onLogout={mockLogout} />)

    const button = screen.getByRole('button', { name: /logout/i })

    await userEvent.click(button)

    expect(mockLogout).toHaveBeenCalledTimes(1)
  })

  it('deve mostrar "loggingOut" enquanto executa', async () => {
    let resolvePromise: () => void

    const mockLogout = jest.fn(
      () =>
        new Promise<void>((resolve) => {
          resolvePromise = resolve
        })
    )

    render(<LogoutButton onLogout={mockLogout} />)

    const button = screen.getByRole('button', { name: /logout/i })

    await userEvent.click(button)

    // estado de loading
    expect(screen.getByRole('button', { name: /loggingOut/i })).toBeDisabled()

    // finaliza a promise
    resolvePromise!()

    // espera voltar ao normal
    expect(await screen.findByRole('button', { name: /logout/i })).toBeEnabled()
  })
})