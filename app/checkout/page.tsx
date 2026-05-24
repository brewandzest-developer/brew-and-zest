import CheckoutForm from "@/components/checkout/checkout-form";
import OrderSummary from "@/components/checkout/order-summary";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#F6F0E4]">

      <div className="px-5 py-12 md:px-16 md:py-20">

        <div className="mb-12">

          <p className="mb-4 uppercase tracking-[0.35em] text-[#8A6A5A]">
            Secure Checkout
          </p>

          <h1 className="text-4xl font-semibold text-[#161414] md:text-6xl">
            Complete Your Order
          </h1>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">

          <CheckoutForm />

          <OrderSummary />

        </div>

      </div>

    </main>
  );
}