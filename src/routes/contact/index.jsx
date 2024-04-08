import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required('This field is required').min(3, 'Name must be at least 3 characters long'),
  subject: yup.string().required('This field is required').min(3, 'Subject must be at least 3 characters long'),
  email: yup.string().required('This field is required').email('Email must be a valid email address'),
  body: yup.string().required('This field is required').min(3, 'Body must be at least 3 characters long'),
});

export function Contact() {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = data => {
    console.log('Form submission is successful.', data);
    setIsSubmittedSuccessfully(true);
    reset({
      name: '',
      subject: '',
      email: '',
      body: '',
    });  
  };

  return (
    <>
      <div>
        <div className='mx-1 mt-28 lg:mx-28 flex flex-col items-center'>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-72 lg:w-96 rounded-sm p-4'>
            <label 
              htmlFor="name" 
              className='text-sm font-light text-gray-950 pt-4 pb-1'
            >Full name:</label>
            <input
              type="text"
              className='rounded-sm px-2 py-1 bg-gray'
              {...register('name')}
            />
            {errors.name && <p className='text-xs text-dark'>{errors.name.message}</p>}

            <label 
              htmlFor="subject"
              className='text-sm font-light text-gray-950 pt-4 pb-1'
            >Subject:</label>
            <input
              type="text"
              className='rounded-sm px-2 py-1 bg-gray '
              {...register('subject')}
            />
            {errors.subject && <p className='text-xs text-dark'>{errors.subject.message}</p>}

            <label 
              htmlFor="email"
              className='text-sm font-light text-gray-950 pt-4 pb-1'
            >Your email:</label>
            <input
              type="email"
              className='rounded-sm px-2 py-1 bg-gray'
              {...register('email')}
            />
            {errors.email && <p className='text-xs text-dark'>{errors.email.message}</p>}

            <label 
              htmlFor="body"
              className='text-sm font-light text-gray-950 pt-4 pb-1'
            >Body:</label>
            <textarea 
              className='rounded-sm px-2 py-1 bg-gray'
              {...register('body')}
            />
            {errors.body && <p className='text-xs text-dark'>{errors.body.message}</p>}

            {isSubmittedSuccessfully && <p className="text-dark mt-2">Form submitted successfully!</p>}

            <button 
              type="submit"
              className='border border-light px-2 py-1.5 hover:bg-light hover:text-dark mt-8 rounded-sm'
            >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
