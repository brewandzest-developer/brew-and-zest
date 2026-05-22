"use client";

import Link from "next/link";

export default function PaymentFailedPage() {

  return (

    <main className="min-h-screen bg-[#f6f0e4] px-6 py-20">

      <div className="mx-auto max-w-2xl rounded-4xl border border-black/10 bg-white p-12 text-center shadow-sm">

        <div className="mb-6 text-6xl">
          ❌
        </div>

        <h1 className="text-4xl font-semibold text-[#161414]">

          Payment Failed

        </h1>

        <p className="mt-4 text-lg text-black/60">

          Something went wrong while processing your payment.

        </p>

        <div className="mt-10 flex items-center justify-center gap-4">

          <Link
            href="/checkout"
            className="rounded-full bg-[#161414] px-8 py-4 text-white transition hover:opacity-90"
          >

            Retry Payment

          </Link>

          <Link
            href="/shop"
            className="rounded-full border border-black/20 px-8 py-4 text-[#161414]"
          >

            Continue Shopping

          </Link>

        </div>

      </div>

    </main>

  );

}