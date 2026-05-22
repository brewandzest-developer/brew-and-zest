import CheckoutForm from "../../components/checkout/checkout-form";
import OrderSummary from "../../components/checkout/order-summary";

export default function CheckoutPage() {
  return (
    <>

      <main className="min-h-screen bg-[#FEF4E4] py-20">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_420px]">

          <CheckoutForm />

          <OrderSummary />

        </div>

      </main>
    </>
  );
}