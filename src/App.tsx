import React, { useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from './stateStore';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import ResetButton from './components/ResetButton';
import { getRandomNumber } from './services/incDecService';
import Input from './components/inputs/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Select from './components/inputs/select';
import SelectSearch from './components/inputs/seactSearch';


function App() {
  const dispatch = useAppDispatch()
  const currentNumber = useTypedSelector((state) => state.IncDec.currentNumber) //getting data from store
  const apiNumber = useTypedSelector((state) => state.IncDec.apiNumber)
  const [value, setValue] = useState(null)
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  console.log(errors)
  return (
    <div className="App">
      {/* <Input label='name' id='name' required={true} register={register} errors={errors} className='h5' placeHolder='name'/> */}
      {/* <Select id='select' value={value} label='dropdown' onChange={(res: any)=>setValue(res)} options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}/> */}
     <SelectSearch id='select' value={value} label='dropdown' onChange={(res: any)=>setValue(res)} options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}/>
    </div>
  );
}

export default App;
