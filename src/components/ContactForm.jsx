import React, { useState } from "react";
import { db } from "../firebase"; // Make sure your firebase config is set up
import { collection, addDoc, Timestamp } from "firebase/firestore";


const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: Timestamp.now(),
      });
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Try again later.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row bg-black text-white px-6 md:px-20 py-16 gap-10"
      data-aos="fade-up"
    >
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src="/images/contact-image.png"
          alt="Contact Us"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 bg-gray-900 bg-opacity-80 rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold mb-8 font-[Anton] text-yellow-400 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="p-3 rounded-md bg-black text-white border border-yellow-400 focus:outline-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email *"
            className="p-3 rounded-md bg-black text-white border border-yellow-400 focus:outline-yellow-400"
            required
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 rounded-md bg-black text-white border border-yellow-400 focus:outline-yellow-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message *"
            rows={5}
            className="p-3 rounded-md bg-black text-white border border-yellow-400 focus:outline-yellow-400 resize-none"
            required
          ></textarea>

          {error && (
            <p className="text-red-500 font-semibold text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-500 font-semibold text-center">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
