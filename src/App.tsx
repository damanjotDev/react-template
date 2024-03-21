import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { CategoryScale } from "chart.js";
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
import DoughnutChart from './components/charts/doughnutChart';
import LoginImage from "./assets/images/login.png"


const validation = yup.object().shape({
  select: yup.date().required().nullable(),
  name: yup.string().required()
})

interface IFormInput {
  select: Date | null | undefined;
  name: string;
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
    <div className="w-full h-screen bg-background">

      <div className='w-full h-full flex items-center justify-center p-5 lg:p-10'>
        <div className='bg-destructive flex items-center justify-between h-[60%] lg:w-[55%] w-[100%] rounded-md border-2 border-primary'>
          <div className='hidden lg:block w-1/2 h-full'>
            <img src={LoginImage} alt="login image" className='w-full h-full' />
          </div>
          <div className='w-full h-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-4'>
            <div className='w-full lg:w-[80%] flex flex-col items-center justify-center'>
              <h1 className='h1 text-secondary-foreground'>Login</h1>

              <form className='w-full flex flex-col gap-3'>
                <Input label='Email' id='name' required={true} register={register} errors={errors} className='h5' placeHolder='Your email' />
                <Input label='Email' id='name' required={true} register={register} errors={errors} className='h5' placeHolder='Your email' />
                <button className='w-full h5 p-2.5 rounded-md bg-primary transition-all hover:opacity-95'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
