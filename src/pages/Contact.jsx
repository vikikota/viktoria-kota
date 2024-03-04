import postbird from '../assets/postbird.png';

function Contact() {
  return (
    <div className="container md:mt-2 flex flex-col md:flex-row justify-around items-center">
      <div className="flex justify-center">
        <img src={postbird} alt="postman birdie" className="w-2/5 md:w-3/5 me-0 md:me-20 mt-5" />
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <form className="">
          <div className="flex flex-col py-3">
            <label htmlFor="name" className="font-elite text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="p-2 border-b-2 border-orange-700 focus:rounded-none focus:border-orange-700 focus:border-b-4 focus:outline-none
 placeholder:text-slate-400 text-sm shadow-sm"
            />
          </div>
          <div className="flex flex-col py-3">
            <label htmlFor="name" className="font-elite text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="p-2 border-b-2 border-orange-700 focus:rounded-none focus:border-orange-700 focus:border-b-4 focus:outline-none
 placeholder:text-slate-400 text-sm shadow-sm"
            />
          </div>
          <div className="flex flex-col py-3">
            <label htmlFor="about" className="font-elite text-gray-800">
              Message
            </label>
            <textarea
              id="about"
              name="about"
              rows="3"
              placeholder="your message"
              className="p-2 border-b-2 border-orange-700 focus:rounded-none focus:border-orange-700 focus:border-b-4 focus:outline-none
 placeholder:text-slate-400 text-sm shadow-sm leading-6"
             />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
