import { render, screen } from '@testing-library/react'
import ErrorAlert from '../components/ErrorAlert'

// mock do i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => fallback || key,
  }),
}))

describe('ErrorAlert', () => {
  it('não deve renderizar nada quando não há erro', () => {
    const { container } = render(<ErrorAlert error={null} />)

    expect(container.firstChild).toBeNull()
  })

  it('deve renderizar o erro quando existir', () => {
    render(<ErrorAlert error="invalidCredentials" />)

    expect(screen.getByText('invalidCredentials')).toBeInTheDocument()
  })

  it('deve usar o fallback quando tradução não existir', () => {
    render(<ErrorAlert error="userNotFound" />)

    expect(screen.getByText('userNotFound')).toBeInTheDocument()
  })
})