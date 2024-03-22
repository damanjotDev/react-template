import React, { useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../stateStore';
import Input from '../../components/inputs/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import LoginImage from "../../assets/images/login.png"
import { Button } from '../../components/buttons/button';
import { GrFacebookOption, IoLogoGoogleplus } from "../../utils/icons"

const validation = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6).max(30).required()
})

interface IFormInput {
  email: string;
  password: string;
}


const ForgetPassword = () => {
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
  } = useForm<IFormInput>({
    resolver: yupResolver(validation),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (


      <div className='w-full h-full flex items-center justify-center p-5'>
        <div className='bg-destructive flex items-center justify-between h-auto lg:w-[70%] w-[100%] rounded-md border-2 border-primary py-10 px-5 lg:px-0'>
          <div className='hidden lg:block w-1/2 h-full'>
            <img src={LoginImage} alt="login image" className='w-full h-full' />
          </div>
          <div className='w-full h-full lg:w-1/2 flex flex-col items-center justify-center'>
            <div className='w-full lg:w-[80%] flex flex-col items-center justify-center gap-5'>
              <h1 className='h1 text-primary'>Login</h1>

              <form className='w-full flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                <Input label='Email' id='email' required={true} register={register} errors={errors} className='h5' placeHolder='Your email' />
                <Input label='Password' id='password' required={true} register={register} errors={errors} className='h5' placeHolder='Your email' />
                <Button type="submit" id='button' className='btn-primary'>Login</Button>
              </form>

              <div className='w-full flex flex-col mt-[-25px] gap-3'>

                <div className='flex items-center justify-center gap-1 '>
                  <div className='flex-1 mt-6 h-[2px] bg-primary rounded-full'/>
                  <span className='h7 text-primary'>Or</span>
                  <div className='flex-1 mt-6 h-[2px] bg-primary rounded-full'/>
                </div>

                <div className='flex jutify-center items-center gap-5'>
                  <Button type="button" id='button' className='btn-primary-outline' onClick={onSubmit}><IoLogoGoogleplus size={27}/></Button>
                  <Button type="button" id='button' className='btn-primary-outline' onClick={onSubmit}><GrFacebookOption size={26}/></Button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
  );
}

export { ForgetPassword };
