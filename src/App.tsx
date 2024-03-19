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
import MultiSelect from './components/inputs/multiSelect';
import DatePicker from './components/inputs/datePicker';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { stringMap } from 'aws-sdk/clients/backup';
import { error } from 'console';
import DatePickerTime from './components/inputs/datePickerTime';


const validation = yup.object().shape({
  select: yup.date().required().nullable(),
  name: yup.string().required()
})

interface IFormInput {
select: Date | null | undefined ;
name : string;
}


function App() {
  const dispatch = useAppDispatch()
  const currentNumber = useTypedSelector((state) => state.IncDec.currentNumber) //getting data from store
  const apiNumber = useTypedSelector((state) => state.IncDec.apiNumber)
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    // resolver: yupResolver(validation),
    defaultValues: {
      select: null,
      name: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <Input label='name' id='name' required={true} register={register} errors={errors} className='h5' placeHolder='name'/>
      {/* <Select id='select' value={value} label='dropdown' onChange={(res: any)=>setValue(res)} options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}/>
      <MultiSelect id='select' value={value} label='dropdown' onChange={(res: any)=>setValue(res)} options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}/>
     <SelectSearch id='select' value={value} label='dropdown' onChange={(res: any)=>setValue(res)} options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}/> */}
     <DatePicker label='select date' id='select' type='date' errors={errors} value={new Date()} onChange = {(res)=>setValue('select',res)}/>
     <DatePickerTime label='select date' id='select' type='date' errors={errors} value={new Date()} onChange = {(res)=>setValue('select',res)}/>

     <button onClick={handleSubmit(onSubmit)}>submit</button>
    </div>
  );
}

export default App;
