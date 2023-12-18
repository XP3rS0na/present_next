'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form'
import React, {useState} from 'react'
import { sendEmail } from '@/utils/send-email'

export type FormData = {
  name: string;
  email: string;
  message: string;

};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  let [status, setStatus] = useState(0);
  
  async function onSubmit(data: FormData) {
    setStatus(await  sendEmail(data));
    console.log(status);
  }

  return (
    <form className="inblock justify-center ml-10 mr-10 mb-10 sm:m-60 sm:mt-5 " onSubmit={handleSubmit(onSubmit)}>
      <h2 className=' sm:flex justify-center'>Contact</h2>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='sm: mb-3 block text-base font-medium text-white'
        >
          Nom et prénom
        </label>
        <input
          type='text'
          placeholder='Jean Durand'
          className='w-full rounded-md  border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-4 focus:border-[#a5b4fc] focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-white'
        >
          Adresse mail
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-4 focus:border-[#a5b4fc] focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-white'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Votre message ici'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-4 focus:border-[#a5b4fc] focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div id="emailButton">
        <div>
          <button className='focus:disabled focus:bg-[#a5b4fc] focus:opacity-20 hover:opacity-70 rounded-md bg-[#a5b4fc] opacity-85 py-3 px-8 text-base font-semibold text-white outline-none'>
            Envoyer
          </button>
        </div>
      <div id="stat" className="hidden">{status}</div>
      </div>
      
    </form>
  );
};

export default Contact;
