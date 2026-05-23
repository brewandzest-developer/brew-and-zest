"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/xldlrnva", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);

      e.currentTarget.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F0E6]">
      {/* Hero */}
      <section className="border-b border-black/10 px-6 py-20 md:px-16">
        <p className="mb-5 uppercase tracking-[0.35em] text-[#8A6A5A]">
          Contact Brew & Zest
        </p>

        <h1 className="max-w-4xl text-6xl font-semibold leading-tight text-[#161414]">
          Let’s Talk Coffee
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#6E625C]">
          Reach out for orders, collaborations, wholesale partnerships, or
          coffee conversations.
        </p>
      </section>

      {/* Contact Info */}
      <section className="px-6 py-16 md:px-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="mb-3 uppercase tracking-[0.25em] text-[#8A6A5A]">
              Email
            </p>

            <a
              href="mailto:info@brewandzest.in"
              className="text-xl text-[#161414] transition hover:opacity-60"
            >
              info@brewandzest.in
            </a>
          </div>

          <div>
            <p className="mb-3 uppercase tracking-[0.25em] text-[#8A6A5A]">
              Instagram
            </p>

            <a
              href="https://instagram.com/thebrewandzest"
              target="_blank"
              className="text-xl text-[#161414] transition hover:opacity-60"
            >
              @thebrewandzest
            </a>
          </div>

          <div>
            <p className="mb-3 uppercase tracking-[0.25em] text-[#8A6A5A]">
              Wholesale
            </p>

            <p className="text-xl text-[#161414]">Café & bulk partnerships</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-black/10 bg-white p-8 md:p-14">
          <h2 className="mb-10 text-5xl font-semibold text-[#161414]">
            Send A Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-full border border-[#DED3C5] bg-[#F8F4ED] px-8 py-5 text-xl outline-none transition focus:border-[#161414]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full rounded-full border border-[#DED3C5] bg-[#F8F4ED] px-8 py-5 text-xl outline-none transition focus:border-[#161414]"
            />

            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={7}
              className="w-full rounded-[30px] border border-[#DED3C5] bg-[#F8F4ED] px-8 py-6 text-xl outline-none transition focus:border-[#161414]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#161414] py-5 text-xl text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {success && (
              <div className="rounded-3xl border border-green-200 bg-green-50 px-6 py-5 text-center">
                <p className="text-lg font-medium text-green-700">
                  Message sent successfully.
                </p>

                <p className="mt-1 text-sm text-green-600">
                  We’ll get back to you shortly.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
