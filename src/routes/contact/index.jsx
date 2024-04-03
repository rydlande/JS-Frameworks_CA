import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('This field is required').min(3, 'Name must be at least 3 characters long'),
  subject: yup.string().required('This field is required').min(3, 'Subject must be at least 3 characters long'),
  email: yup.string().required('This field is required').email('Email must be a valid email address'),
  body: yup.string().required('This field is required').min(3, 'Body must be at least 3 characters long'),
});

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('Form submission is successful.', data);
  };

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Full name:</label>
        <input
          type="text"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          {...register('subject')}
        />
        {errors.subject && <p>{errors.subject.message}</p>}

        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="body">Body:</label>
        <textarea
          {...register('body')}
        />
        {errors.body && <p>{errors.body.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}


/* import { useState } from "react"

export function Contact() {
  const [name, setName] = useState('') //Minimum number of characters is 3, required
  const [subject, setSubject] = useState('') //Minimum number of characters is 3, required
  const [email, setEmail] = useState('') //Must be a valid email address, required
  const [body, setBody] = useState('') //Minimum number of characters is 3, required

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    subject: '',
    email: '',
    body: ''
  }) */

  /* function handleSubmit(e) {
    e.preventDefault()

    setErrorMessage({
      name: '',
      subject: '',
      email: '',
      body: ''
    });

    let success = true;
    const output= {};
    console.log(name, subject, email, body)

    if (!name) {
      success = false;
      output.name = 'This field is required';
    } else if (name.length < 3) {
      success = false;
      output.name = 'Name must be at least 3 characters long';
    }
    
    if (!subject) {
      success = false;
      output.subject = 'This field is required';
    } else if (subject.length < 3) {
      success = false;
      output.subject = 'Subject must be at least 3 characters long';
    }
    
    if (!email) {
      success = false;
      output.email = 'This field is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        success = false;
        output.email = 'Email must be a valid email address';
      }
    }
    if (!body) {
      success = false;
      output.body = 'This field is required';
    } else if (body.length < 3) {
      success = false;
      output.body = 'Body must be at least 3 characters long';
    }

    setErrorMessage(output);

    if (success) {
      console.log('Form submission is successful.');
      console.log({ name, subject, email, body });
    } else {
      console.log('Form validation failed.');
      console.log(output);
    }
  } */
  /* function handleSubmit(e) {
    e.preventDefault();
    
    const initialErrorState = {
      name: '',
      subject: '',
      email: '',
      body: ''
    };

    let success = true;

    setErrorMessage(initialErrorState);
  
    if (!name) {
      success = false;
      setErrorMessage({ ...initialErrorState, name: 'This field is required' });
      return;
    } else if (name.length < 3) {
      success = false;
      setErrorMessage({ ...initialErrorState, name: 'Name must be at least 3 characters long' });
      return;
    }
    
    if (!subject) {
      success = false;
      setErrorMessage({ ...initialErrorState, subject: 'This field is required' });
      return;
    } else if (subject.length < 3) {
      success = false;
      setErrorMessage({ ...initialErrorState, subject: 'Subject must be at least 3 characters long' });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      success = false;
      setErrorMessage({ ...initialErrorState, email: 'This field is required' });
      return;
    } else if (!emailRegex.test(email)) {
      success = false;
      setErrorMessage({ ...initialErrorState, email: 'Email must be a valid email address' });
      return;
    }
    
    if (!body) {
      success = false;
      setErrorMessage({ ...initialErrorState, body: 'This field is required' });
      return;
    } else if (body.length < 3) {
      success = false;
      setErrorMessage({ ...initialErrorState, body: 'Body must be at least 3 characters long' });
      return;
    }
  
    if (success) {
      console.log('Form submission is successful.');
      console.log({ name, subject, email, body });
    }
  }
  

  function handleName(e) {
    setName(e.target.value)
  }

  function handleSubject(e) {
    setSubject(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleBody(e) {
    setBody(e.target.value)
  }

    return (
      <>
        <h1>Contact</h1>
        <form action='' onSubmit={handleSubmit}>
          <label htmlFor="name">Full name:</label>
          <input 
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
          {errorMessage.name && <label htmlFor='name'>{errorMessage.name}</label>}

          <label htmlFor="subject">Subject:</label>
          <input 
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={handleSubject}
          />
          {errorMessage.subject && <label htmlFor='subject'>{errorMessage.subject}</label>}

          <label htmlFor="email">Your email:</label>
          <input 
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
          {errorMessage.email && <label htmlFor='email'>{errorMessage.email}</label>}

          <label htmlFor="body">Body:</label>
          <textarea 
            name="body"
            id="body"
            value={body}
            onChange={handleBody}
          />
          {errorMessage.body && <label htmlFor='body'>{errorMessage.body}</label>}

          <button type="submit">Submit</button>

        </form>
      </>
    )
} */