import {useAppDispatch} from '../stateStore'
import { IncDecActions } from '../reducers/IncDecSlice'

const IncrementButton = ({value}: {value: number | undefined}) => {
  const dispatch = useAppDispatch()

  const incrementButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!value) {
      dispatch(IncDecActions.incrementNumber())
    } 
    else {
      dispatch(IncDecActions.incrementUserValue(value))
    }
  }

  return (
    <button onClick={incrementButtonClickHandler}>
      Increment
    </button>
  )
}

export default IncrementButton
