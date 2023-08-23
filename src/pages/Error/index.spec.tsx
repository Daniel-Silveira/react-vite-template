import { render } from '@testing-library/react'
import { ErrorPage } from './index'

describe('ErrorPage', () => {
  it('should display error message', () => {
    const { getByText } = render(<ErrorPage />)
    const errorMessage = getByText('Página não encontrada')
    expect(errorMessage).toBeInTheDocument()
  })
})
