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
              className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg font-semibold"
            >
              Call Now
            </a>

            <a
              href="/"
              className="border border-white px-6 py-4 rounded-lg"
            >
              Visit Main Website
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
            Fast payment. Fair offers. Nationwide buying.
            Contact us today and receive a quote.
          </p>

          <a
            href="tel:+15312139198"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-lg text-lg font-semibold"
          >
            Call (531) 213-9198
          </a>

        </div>

      </section>

    </main>
  );
}