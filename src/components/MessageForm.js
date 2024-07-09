import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function MessageForm() {
 
return (
    <div className="isolate bg-white px-6 py-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 ">Contact us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
            Feel Free to Contact us...
        </p>
      </div>
    <form action="#" method="POST" className="mx-auto mt-4 max-w-xl ">
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
            Full name
          </label>
          <div className="mt-2">
            <input id="name" name="name" type="text" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div className="relative mt-2">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">Country</label>
              <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>IND</option>
                <option>CA</option>
                <option>US</option>
              </select>
              <ChevronDownIcon aria-hidden="true" className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"/>
            </div>
            <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service_type" className="block text-sm font-semibold leading-6 text-gray-900">
            Type of Service
          </label>
          <div className="mt-2">
            <input id="service_type" name="service_type" type="text" autoComplete="service_type" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div className="mt-2">
            <textarea id="message" name="message" rows={4}  className="block w-full resize-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''}/>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </form>
  </div>
   
  )
}

export default MessageForm;