import { render, screen } from '@testing-library/react'
import AppProviders from 'context'
import faker from 'faker'
import Voter from '.'
import userEvent from '@testing-library/user-event'

/**
 * Test goal for Voter component
 * >1. Test voter's name to be the name passed into the component
 * >2. Test increment/decrement function
 * >3. Test if the decrement is disabled when current votes is zero
 * Documentation to read:
 * >1. Check button is disbaled in React-Testing-Library: https://stackoverflow.com/questions/56593840/check-that-button-is-disabled-in-react-testing-library
 * >2. Test component customized by Redux and React-Redux:https://redux.js.org/recipes/writing-tests#components
 */

test('Voter component', () => {
  const name = faker.name.firstName(0)
  render(<Voter name={name} />, { wrapper: AppProviders })

  // expect voter's name to be in the document
  expect(screen.getByText(name)).toBeInTheDocument()
  //   expec the default votes numbe to be zero
  expect(screen.getByText('Votes: 0')).toBeInTheDocument()
  // decrement is disabled when votes is zero
  expect(screen.getByRole('button', { name: /Decrement/i })).toBeDisabled()

  // click increment button
  userEvent.click(screen.getByRole('button', { name: /Increment/i }))
  expect(screen.getByText('Votes: 1')).toBeInTheDocument()
  // decrement is enabled when votes >=1
  expect(screen.getByRole('button', { name: /Decrement/i })).not.toBeDisabled()

  // click decrement button
  userEvent.click(screen.getByRole('button', { name: /Decrement/i }))
  expect(screen.getByText('Votes: 0')).toBeInTheDocument()
  // decrement is disabled when votes is zero
  expect(screen.getByRole('button', { name: /Decrement/i })).toBeDisabled()
})
