import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone_number: yup.string().required('Phone number is required'),
  service_type: yup.string().required('Type of Service is required'),
  message: yup.string().required('Message is required'),
});

function MessageForm() {

  const toast = useRef(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data) => {
    emailjs
      .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        () => {
          toast.current.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Message Successfully Sent..!!',
            life: 3000,
          });
          reset(); // Reset form fields
        },
        (error) => {
          toast.current.show({severity:'error', summary: 'Error', detail:error.text , life: 3000});
        }
      );
  };

  return (
    <div className="isolate bg-white px-6 py-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">Contact us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Feel Free to Contact us...</p>
      </div>
      <form onSubmit={handleSubmit(sendEmail)} className="mx-auto mt-4 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="full_name" className="block text-sm font-semibold leading-6 text-gray-900">
              Full name
            </label>
            <div className="mt-2">
              <input
                id="full_name"
                {...register('full_name')}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register('email')}
                type="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2">
           
              <input
                id="phone-number"
                {...register('phone_number')}
                type="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="service_type" className="block text-sm font-semibold leading-6 text-gray-900">
              Type of Service
            </label>
            <div className="mt-2">
              <input
                id="service_type"
                {...register('service_type')}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.service_type && <p className="text-red-500 text-xs mt-1">{errors.service_type.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="block w-full resize-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Toast position="bottom-right" ref={toast} />
          <Button
            type="submit"
            severity="success"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
