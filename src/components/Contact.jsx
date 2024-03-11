import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import postbird from '../assets/postbird.png';

function Contact() {
  const [state, handleSubmit] = useForm('xzbnvpbk');
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let timer1;

    if (state.succeeded) {
      setEmailSent(true);

      timer1 = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          about: '',
        });
      }, 100);

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }

    return () => {
      clearTimeout(timer1);
    };
  }, [state.succeeded]);

  return (
    <div className="bg-orange-900 bg-opacity-15">
      <div className="container flex flex-col mx-auto md:flex-row justify-center items-center max-w-[1200px] md:w-4/5 py-7">
        <div className="flex flex-row md:flex-col justify-center items-center md:items-start w-5/6 md:w-full lg:w-1/2">
          <p className="text-gray-800 font-bold font-elite text-xl sm:text-2xl md:text-2xl lg:text-3xl w-3/5 md:w-3/5 py-5 md:text-center">
            CONTACT ME
          </p>
          <img
            src={postbird}
            alt="postman birdie"
            className="transform scale-x-[-1] md:scale-x-[1] w-2/5 md:w-3/5 lg:w-3/5"
          />
        </div>
        <div className="flex flex-col w-5/6 md:full lg:w-2/3 xl:w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label htmlFor="name" className="font-elite text-gray-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                disabled={emailSent}
                value={formData.name}
                onChange={handleChange}
                className="p-2 border-b-2 hover:bg-neutral-50 border-orange-700 focus:rounded-none focus:border-orange-700 focus:border-b-4 focus:outline-none
 placeholder:text-slate-400 text-sm shadow-sm focus:shadow-md"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="email" className="font-elite text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                disabled={emailSent}
                value={formData.email}
                onChange={handleChange}
                className="p-2 border-b-2 hover:bg-neutral-50 border-orange-700 focus:border-orange-700 focus:border-b-4 focus:outline-none
 placeholder:text-slate-400 text-sm shadow-md focus:shadow-md  autofill:!bg-white"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="about" className="font-elite text-gray-800">
                Message
              </label>
              <textarea
                id="about"
                name="about"
                rows="3"
                placeholder="your message"
                disabled={emailSent}
                value={formData.about}
                onChange={handleChange}
                className="p-2 border-b-2 hover:bg-neutral-50 border-orange-700 focus:rounded-none focus:border-orange-700 focus:border-b-4 focus:outline-none
 placeholder:text-slate-400 text-sm shadow-sm focus:shadow-md leading-6"
              />
            </div>
            <div>
              {!emailSent && (
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-2 py-2 px-3 font-elite text-white bg-orange-800 shadow-sm hover:scale-105"
                >
                  SEND
                </button>
              )}
            </div>
            <div className="my-2">
              {emailSent && (
                <div disabled className="bg-teal-900 text-white px-3 py-2 shadow-md font-elite uppercase text-center">
                  <p>Email sent successfully!</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
