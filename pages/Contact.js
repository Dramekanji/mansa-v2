import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the server
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success - show success message
      setSubmitSuccess(true);
      // Clear the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Optionally, hide the success message after a delay
      setTimeout(() => setSubmitSuccess(false), 5000);
    } else {
      // Handle error - show error message to the user
      const data = await response.json();
      console.error("Error sending message:", data.message);
      // Here you might want to set an error message state and display it
    }
  };

  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen mt-40">
      <h1 className="text-3xl font-semibold uppercase text-center p-4">
        Get In Touch
      </h1>
      {submitSuccess ? (
        <div className="text-center">
          <p className="text-xl font-semibold">We'll be in touch soon!</p>
        </div>
      ) : (
        <form className="max-w-[640px] m-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border shadow-lg p-3 text-black"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="border shadow-lg p-3 text-black"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            className="border shadow-lg p-3 w-full my-4 text-black"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            className="border shadow-lg p-3 w-full text-black"
            rows="10"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="border shadow-lg p-3 w-full mt-2 hover:bg-yellow-500 hover:text-black font-semibold"
          >
            Submit
          </button>
        </form>
      )}
      <h1 className="text-3xl font-semibold uppercase text-center p-4 mt-6">
        Email Address
      </h1>
      <p className="text-center mt-2 font-bold">
        mansanzingaproductions@gmail.com
      </p>
    </div>
  );
};

export default Contact;
