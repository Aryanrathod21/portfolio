import React from 'react';
import { FaInstagram,FaMailBulk,FaPhoneAlt} from "react-icons/fa";


type Props = {};

const Contact = (props: Props) => {
  return (
    <section>
    <div className=" min-h-screen flex items-center justify-center py-6 text-black">
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="md:text-3xl sm:text-2xl text-2xl font-bold mb-4">Get In Touch</h2>
            <p className='font-medium'>If you're impressed by my work and have an exciting project in mind, feel free to send me a direct message or reach out through the social platforms listed below.</p>
            <div className="mt-4">
              <div className="flex items-center lg:py-3 md:py-2 sm:py-1 py-1">
              <FaInstagram className="w-8 h-8 text-green-500" />

                <span className="ml-2">ar.yan21_</span>
              </div>
              <div className="flex items-center lg:py-3 md:py-2 sm:py-1 py-1">
              <FaMailBulk className="w-8 h-8 text-green-500" />
                <span className="ml-2">aryanrathod410@gmail.com</span>
              </div>
              <div className="flex items-center lg:pt-3 md:pt-2 sm:pt-1 pt-1">
              <FaPhoneAlt className="w-8 h-8 text-green-500" />
                <span className="ml-2">+91 9537954871</span>
              </div>
              <div className="flex justify-end">
                <img src="/contzoro.png" alt="image" className="w-40 h-auto"/>
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-3xl sm:text-2xl text-2xl font-bold mb-4">Leave A Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-4 border border-gray-300 rounded-md"/>
              <input type="text" placeholder="Mobile" className="w-full px-4 py-4 border border-gray-300 rounded-md"/>
              <input type="email" placeholder="Email" className="w-full px-4 py-4 border border-gray-300 rounded-md"/>
              <input type="text" placeholder="Subject" className="w-full px-4 py-4 border border-gray-300 rounded-md"/>
              <textarea placeholder="Describe your project" className="w-full px-4 py-4 border border-gray-300 rounded-md h-32"></textarea>
              <button type="submit" className="w-full px-4 py-4 bg-green-500 hover:bg-red-500 text-white rounded-md">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
