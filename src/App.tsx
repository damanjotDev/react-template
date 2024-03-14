import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useTypedSelector } from './stateStore';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import ResetButton from './components/ResetButton';
import { getRandomNumber } from './services/incDecService';

function App() {
  const dispatch = useAppDispatch()
  const currentNumber = useTypedSelector((state) => state.IncDec.currentNumber) //getting data from store
  const apiNumber = useTypedSelector((state) => state.IncDec.apiNumber)
  const [userNumber, setUserNumber] = useState<number>()

  const userNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNumber(+e.target.value)
  }

  useEffect(() => {
    if (apiNumber !== null) {
      setUserNumber(apiNumber)
    } else {
      setUserNumber(undefined)
    }
  },[apiNumber])

  const randomNumberGeneratorButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(getRandomNumber())
  }
console.log('31', apiNumber)
  return (
    <div className="App">
      <h2>{currentNumber}</h2>
      <div className='buttons'>
        <div className='button-div'>
          <IncrementButton value={userNumber} />
          <DecrementButton value={userNumber}/>
        </div>
        <ResetButton />
      </div>
      <input 
        type="number"
        style={{marginBottom: '2rem'}}
        value={userNumber ? userNumber : undefined} 
        onChange={userNumberHandler} 
      />
      <button onClick={randomNumberGeneratorButton}>Get Random Number From API</button>
    </div>
  );
}

export default App;
