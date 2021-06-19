import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import App from '../App'
import AppProviders from 'context'
import userEvent from '@testing-library/user-event'

test('Render <App />', async () => {
  render(<App />, { wrapper: AppProviders })

  // show loading spinner before user's name is loaded
  expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  await waitForElementToBeRemoved(screen.getByText(/loading.../i))

  // the initial total votes is zero
  expect(
    screen.getByLabelText('total-votes').textContent
  ).toMatchInlineSnapshot(`"0 votes"`)

  // the target should be Sistilli
  expect(
    screen.getByRole('heading', { name: /votes for/i }).textContent
  ).toMatchInlineSnapshot(`"Votes for Sistilli"`)

  //  the intial total votes value is zero
  expect(screen.getByRole('list')).toMatchSnapshot()

  // first user did up votes
  userEvent.click(
    within(screen.getByLabelText('voter-John')).getByRole('button', {
      name: /increment/i,
    })
  )
  expect(
    screen.getByLabelText('total-votes').textContent
  ).toMatchInlineSnapshot(`"1 votes"`)

  // second user did up votes
  userEvent.click(
    within(screen.getByLabelText('voter-Julian')).getByRole('button', {
      name: /increment/i,
    })
  )
  expect(
    screen.getByLabelText('total-votes').textContent
  ).toMatchInlineSnapshot(`"2 votes"`)

  // third user did up votes
  userEvent.click(
    within(screen.getByLabelText('voter-Kate')).getByRole('button', {
      name: /increment/i,
    })
  )
  userEvent.click(
    within(screen.getByLabelText('voter-Kate')).getByRole('button', {
      name: /increment/i,
    })
  )
  expect(
    screen.getByLabelText('total-votes').textContent
  ).toMatchInlineSnapshot(`"4 votes"`)
  // third user did down votes
  userEvent.click(
    within(screen.getByLabelText('voter-Kate')).getByRole('button', {
      name: /decrement/i,
    })
  )
  expect(
    screen.getByLabelText('total-votes').textContent
  ).toMatchInlineSnapshot(`"3 votes"`)
})
