import React, { useRef, useReducer } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = ({ heading }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS":
        return { ...state, pending: false };
      case "PENDING":
        return { ...state, pending: true };
      case "ERROR":
        return { ...state, error: true, pending: false };

      default:
        break;
    }
  };

  const form = useRef();
  const [{ pending, error }, dispatch] = useReducer(reducer, {
    pending: false,
    error: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    dispatch({ type: "PENDING" });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          dispatch({ type: "SUCCESS" });
          toast.success("message sent");
          form.current.reset();
        },
        (error) => {
          dispatch({ type: "ERROR" });
          toast.error("Error Sending Message");
          setTimeout(() => {
            form.current.reset();
          }, 5000);
        }
      );
  };

  return (
    <div className="contact-form">
      <h4>{heading}</h4>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name" name="full_name" required />
        <input
          type="email"
          placeholder="email address"
          name="user_email"
          required
        />
        <textarea placeholder="message" name="message" required></textarea>
        <button className="form-button" type="submit">
          {pending ? "Sending" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
