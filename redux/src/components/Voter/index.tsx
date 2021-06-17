import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from 'store/features/counter'
import { Wrapper, Button } from './styles'

const Voter: React.FC<{ name: string }> = ({ name }) => {
  const dispatch = useDispatch()

  const [votes, setVotes] = React.useState(0)

  const handleIncrement = () => {
    dispatch(increment())
    setVotes(votes + 1)
    return false
  }
  const handleDecrement = () => {
    if (votes - 1 >= 0) {
      dispatch(decrement())
      setVotes(votes - 1)
    }
    return false
  }

  return (
    <Wrapper>
      <h2> {name} </h2>
      <h3> {`Votes: ${votes}`} </h3>
      <div>
        <Button onClick={handleIncrement}> Increment </Button>
        <Button onClick={handleDecrement} disabled={votes === 0}>
          Decrement
        </Button>
      </div>
    </Wrapper>
  )
}

export default React.memo(Voter)
