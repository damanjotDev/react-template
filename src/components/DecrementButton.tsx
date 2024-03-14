import {useAppDispatch} from '../stateStore'
import { IncDecActions } from '../reducers/IncDecSlice'

const DecrementButton = ({value}: {value: number | undefined}) => {
  const dispatch = useAppDispatch()

  const DecrementButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!value) {
      dispatch(IncDecActions.decrementNumber())
    } else {
      dispatch(IncDecActions.decrementUserValue(value))
    }
  }

  return (
    <button onClick={DecrementButtonClickHandler}>
      Decrement
    </button>
  )
}

export default DecrementButton
