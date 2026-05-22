"use client";

import Link from "next/link";

export default function PaymentSuccessPage() {

  return (

    <main className="min-h-screen bg-[#f6f0e4] px-6 py-20">

      <div className="mx-auto max-w-2xl rounded-4xl border border-black/10 bg-white p-12 text-center shadow-sm">

        <div className="mb-6 text-6xl">
          ✅
        </div>

        <h1 className="text-4xl font-semibold text-[#161414]">

          Payment Successful

        </h1>

        <p className="mt-4 text-lg text-black/60">

          Your Brew & Zest order has been confirmed successfully.

        </p>

        <div className="mt-10">

          <Link
            href="/shop"
            className="inline-flex rounded-full bg-[#161414] px-8 py-4 text-white transition hover:opacity-90"
          >

            Continue Shopping

          </Link>

        </div>

      </div>

    </main>

  );

}