import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="w-96 px-3 py-2 text-sm text-gray-600 placeholder-gray-600 bg-purple-200 border-0 rounded shadow"
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-96 px-3 py-2 text-sm text-gray-600 placeholder-gray-600 bg-purple-200 border-0 rounded shadow"
        />
      </div>

      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-96 px-3 py-11 text-start text-sm  text-gray-600 placeholder-gray-600 bg-purple-200 border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-md bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
