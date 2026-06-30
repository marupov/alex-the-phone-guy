export default function BulkPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold mb-6">
            Sell Bulk Phones & Electronics
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            We purchase wholesale lots of smartphones, tablets, laptops,
            smartwatches, and other electronics from businesses, schools,
            repair shops, recyclers, liquidators, and resellers.
          </p>

          <div className="flex gap-4 flex-wrap">
  <a
    href="tel:+15312139198"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
  >
    Call Now
  </a>

  <a
    href="#request-offer"
    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition"
  >
    Request an Offer
  </a>
</div>
    
        </div>
      </section>

      {/* What We Buy */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          What We Buy
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Smartphones
            </h3>

            <p>
              iPhone, Samsung Galaxy, Google Pixel,
              Motorola, OnePlus and more.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Tablets & Laptops
            </h3>

            <p>
              iPads, MacBooks, Surface devices,
              Chromebooks and Windows laptops.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Mixed Electronics
            </h3>

            <p>
              Smartwatches, gaming consoles,
              accessories and mixed wholesale lots.
            </p>
          </div>

        </div>

      </section>

      {/* Who We Work With */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            We Buy From
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <ul className="space-y-3">
              <li>• Wireless retailers</li>
              <li>• Repair shops</li>
              <li>• Pawn shops</li>
              <li>• IT companies</li>
            </ul>

            <ul className="space-y-3">
              <li>• Schools & Universities</li>
              <li>• Businesses upgrading devices</li>
              <li>• Liquidators</li>
              <li>• Electronics wholesalers</li>
            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Sell a Bulk Lot?
          </h2>

          <p className="text-xl text-gray-600 mb-10">
           Fast payment. Competitive offers. Trusted wholesale buyer.
          </p>

          <a
            href="tel:+15312139198"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-lg text-lg font-semibold"
          >
            Call (531) 213-9198
          </a>

        </div>

      </section>

    <section className="bg-gray-50 py-24">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-14">
      Why Companies Choose Alex The Phone Guy
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold mb-3">
          Fast Payment
        </h3>
        <p className="text-gray-600">
          Same-day offers with payment by wire transfer, ACH, cash, or other secure methods.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold mb-3">
          Any Quantity
        </h3>
        <p className="text-gray-600">
          From 20 devices to several thousand, we purchase wholesale inventories of all sizes.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold mb-3">
          Simple Process
        </h3>
        <p className="text-gray-600">
          Send your inventory list or photos, receive an offer, ship or schedule pickup, and get paid quickly.
        </p>
      </div>

    </div>
  </div>
</section>

<section
  id="request-offer"
  className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center"
>
  <h2 className="text-4xl font-bold mb-6 text-center">
    Request a Wholesale Offer
</h2>

  <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
    Complete the form below and we'll review your inventory and contact you with a competitive offer, typically within one business day.</p>
    <form
  action="https://formspree.io/f/mvzjbzgw"
  method="POST"
  className="grid gap-5 w-full max-w-3xl"
>
  <input
  type="text"
  name="company"
  placeholder="Company Name"
  className="border rounded-lg p-4"
/>

  <input
  type="text"
  name="contact"
  placeholder="Contact Name"
  className="border rounded-lg p-4"
/>

  <input
  type="email"
  name="email"
  placeholder="Email"
  className="border rounded-lg p-4"
/>

  <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  className="border rounded-lg p-4"
/>

 <textarea
  name="inventory"
  rows={6}
  placeholder="Tell us about your inventory. Include device models, quantities, condition, carrier status, etc."
  className="border rounded-lg p-4"
/>

 <button
  type="submit"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
>
  Request an Offer
</button>

    </form>
  
</section>

    </main>
  );
}