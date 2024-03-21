import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear the error message for the field
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    // Validate full name
    if (formData.fullName.trim() === '') {
      newFormErrors.fullName = 'votre FullName est vide';
      isValid = false;
    }

    // Validate email
    if (formData.email.trim() === '') {
      newFormErrors.email = 'Votre email est vide';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate phone
    if (formData.phone.trim() === '') {
      newFormErrors.phone = 'votre number est vide';
      isValid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      newFormErrors.message = 'votre Message est vide';
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };
  const [message, setMessage] = useState('');
  const handleClick = () => {
    if (validateForm()) {
    setMessage('Message envoyé avec succès!');
    setTimeout(() => {
      setMessage('');
    }, 4000);
  }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    


    emailjs
      .sendForm('service_ubi6gcc', 'template_cbsq7cr', form.current, {
        publicKey: '-8Nbp8szRmKNVEotP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    if (validateForm()) {
      // Form is valid, submit the data
      console.log(formData);
     

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <div className="relative bg-lime-500  pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-lime-400"></div>
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-lime-400 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-indigo-600 hover:text-indigo-800">ADF EMBALLAGE</h2>
            <p className="mt-3 text-lg leading-6">Développez votre entreprise grâce à notre services.</p>
            <dl className="mt-8 text-base">
              <div>

                <dt className="sr-only">Postal address</dt>
                <dd>

                  <a
                    href="https://www.google.com/maps/search/Zone Industriel Aéropole - Nouaceur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <p>Zone Industriel Aéropole - Nouaceur</p>
                    
                  </a>
                </dd> </div>

              <div className="mt-6">
                <dt className="sr-only ">Phone number</dt>
                <dd className="flex items-center">
                  <svg className="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25"></path>
                  </svg>
                  <a className="ml-3 text-indigo-600 hover:text-indigo-800" href="https://wa.me/212669430339" target="_blank" rel="noopener noreferrer">+212 669-430339</a>
                </dd>
              </div>

              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <svg className="h-6 w-6 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                  </svg>
                  <span className="ml-3 text-indigo-600 hover:text-indigo-800">contact@opia.ma / infos@opia.ma</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base">
              Looking for careers?
              <a href="/" className="font-medium underline text-indigo-600 hover:text-indigo-800">View all job openings</a>.
            </p>
          </div>
        </div>
        <div className="bg-lime-500 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={handleSubmit} ref={form} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  id="full-name"
                  autoComplete="name"
                  className={`block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-black ${formErrors.fullName ? 'border-red-500' : ''}`}
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {formErrors.fullName && <p className="text-red-500 mt-2">{formErrors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-black ${formErrors.email ? 'border-red-500' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <p className="text-red-500 mt-2">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className={`block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-black ${formErrors.phone ? 'border-red-500' : ''}`}
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && <p className="text-red-500 mt-2">{formErrors.phone}</p>}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="message"
                  className={`block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-black ${formErrors.phone ? 'border-red-500' : ''}`}
                  placeholder="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {formErrors.message && <p className="text-red-500 mt-2">{formErrors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block bg-indigo-500 py-3 px-8 rounded-md shadow-lg font-semibold text-white hover:bg-indigo-600 focus:bg-indigo-600"
                  onClick={handleClick} >
                  Send
                </button>
                <br /> <br /> 
                {message && (
                       <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md bounce">  {message}    </div>)}
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;