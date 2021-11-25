import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const ContactMe = () => {
  const [result, showResults] = useState();
  const form = useRef();

  const userIdKey = process.env.NEXT_PUBLIC_YOUR_USER_ID;
  const templateIdKey = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
  const serviceIdKey = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;

  const Result = () => {
    return <p>Your message was sent. Thank You!</p>;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResults(true);
  };

  return (
    <>
      <form ref={form} className="flex flex-col space-y-8" onSubmit={sendEmail}>
        {/* <label className="block text-lg text-bookmark-grey">Name</label> */}
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          className="text-md focus:outline-none border-b-2 border-bookmark-grey focus:border-bookmark-purple"
          required={true}
        />
        {/* <label className="text-bookmark-grey">Email</label> */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none border-b-2 border-bookmark-grey focus:border-bookmark-purple"
          required={true}
        />
        {/* <label className="text-bookmark-grey">Message</label> */}
        <textarea
          name="message"
          className="border-2 border-bookmark-grey focus:outline-none pt-2"
          placeholder="Message"
          required={true}
        />
        <input
          type="submit"
          value="Send"
          className=" bg-bookmark-white py-4 rounded-md"
        />
      </form>
      <div>{result ? <Result /> : null}</div>
    </>
  );
};
