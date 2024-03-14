import { IncDecActions } from "../reducers/IncDecSlice"
import { useAppDispatch } from "../stateStore"

const ResetButton = () => {
  const dispatch = useAppDispatch()

  const resetButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(IncDecActions.resetValue())
  }

  return (
    <button onClick={resetButtonClickHandler}>Reset</button>
  )
}

export default ResetButton
