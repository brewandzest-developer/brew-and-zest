"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [successMessage, setSuccessMessage] =
  useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage(
            "Message sent successfully. We'll get back to you shortly."
          );
          
          form.reset();
      } else {
        setSuccessMessage(
            "Something went wrong. Please try again."
          );
      }
    } catch (error) {
      console.error(error);

      setSuccessMessage(
        "Failed to send message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#f5ecdc] text-[#161414]">

      {/* Hero Section */}
      <section className="border-b border-black/10">

        <div className="mx-auto max-w-360 px-6 py-28">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#7c5c52]">
            Contact Brew & Zest
          </p>

          <h1 className="max-w-225 text-6xl font-bold leading-tight md:text-8xl">
            Let&apos;s Talk
            <br />
            Coffee
          </h1>

          <p className="mt-10 max-w-175 text-xl leading-9 text-black/70">
            Reach out for orders, collaborations, wholesale partnerships,
            or coffee conversations.
          </p>

        </div>

      </section>

      {/* Contact Layout */}
      <section>

        <div className="mx-auto grid max-w-360 gap-16 px-6 py-28 md:grid-cols-2">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <div className="mt-12 space-y-8 text-lg">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-[#7c5c52]">
                  Email
                </p>

                <p className="mt-2">
                  info@brewandzest.in
                </p>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-[#7c5c52]">
                  Instagram
                </p>

                <p className="mt-2">
                  @thebrewandzest
                </p>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-[#7c5c52]">
                  Location
                </p>

                <p className="mt-2">
                  India
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-4xl border border-black/10 bg-white p-10">

            <h3 className="text-5xl font-bold">
              Send A Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-full border border-black/10 bg-[#f8f4ee] px-6 py-5 text-lg outline-none transition focus:border-black"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-full border border-black/10 bg-[#f8f4ee] px-6 py-5 text-lg outline-none transition focus:border-black"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={8}
                required
                className="w-full rounded-4xl border border-black/10 bg-[#f8f4ee] px-6 py-5 text-lg outline-none transition focus:border-black"
              />

                {successMessage && (

                <div className="rounded-3xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">

                {successMessage}

                </div>

                )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full bg-[#161414] py-5 text-lg text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {isLoading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}