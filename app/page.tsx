export default function AlexThePhoneGuyWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.5),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm tracking-wide text-zinc-300">
                Same-Day Meetups Available
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Sell Your
              <span className="block text-blue-400">Phones & Electronics</span>
              For Quick Cash
            </h1>

            <p className="mt-6 text-lg text-zinc-300 max-w-xl leading-relaxed">
              We buy used, broken, locked, old, new, and carrier-locked
              phones, tablets, laptops, gaming consoles, smartwatches,
              AirPods, cameras, and more in Omaha and surrounding areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:5312139198"
                className="bg-blue-500 hover:bg-blue-400 transition-all px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/20"
              >
                Call Now: 531-213-9198
              </a>

<a
  href="https://m.me/alexthephoneguy"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-blue-500 bg-blue-600 hover:bg-blue-500 transition-all px-8 py-4 rounded-2xl font-semibold text-white"
>
  Get a Quote on Messenger
</a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                'Broken Phones',
                'Locked Devices',
                'Fast Cash',
                'Local Meetups',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-4 py-4 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="/banner.png"
                alt="Alex The Phone Guy Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    We Buy Phones & Electronics in Omaha
  </h2>

  <p className="text-zinc-300 text-lg leading-8 max-w-4xl">
    Alex The Phone Guy buys used, broken, locked, and new phones,
    tablets, laptops, gaming consoles, Apple Watches, AirPods,
    cameras, and other electronics for cash in Omaha, Bellevue,
    Council Bluffs, Lincoln, and surrounding areas.

    We offer fast quotes, same-day meetups, and fair cash offers
    for your devices.
  </p>
</section>

      {/* LOGO STRIP */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/logo.png"
            alt="Alex The Phone Guy Logo"
            className="w-40 h-40 object-contain"
          />

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tight">
              Alex The Phone Guy
            </h2>
            <p className="mt-3 text-zinc-300 text-lg">
              "Broken or Locked? We Buy It."
            </p>
            <p className="mt-2 text-zinc-500">
              Serving Omaha, Bellevue, Council Bluffs, Lincoln & surrounding
              areas.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUY */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
              What We Buy
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Phones, Electronics & More
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'iPhones & Samsung Phones',
              'Carrier Locked Phones',
              'Broken Devices',
              'Laptops & MacBooks',
              'Gaming Consoles',
              'Tablets & iPads',
              'Apple Watches & Smartwatches',
              'AirPods & Accessories',
              'Cameras & Tech Gear',
            ].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl mb-6">
                  ✓
                </div>

                <h3 className="text-xl font-bold">{item}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  Fast offers, local meetups, and same-day cash available.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Fast & Simple Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Call or Text',
                desc: 'Tell us what device you have and its condition.',
              },
              {
                step: '02',
                title: 'Get Your Offer',
                desc: 'We give you a fast, fair cash quote.',
              },
              {
                step: '03',
                title: 'Meet & Get Paid',
                desc: 'Same-day meetup available around Omaha.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-black border border-zinc-800 rounded-3xl p-10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-[8rem] font-black text-zinc-900 leading-none">
                  {item.step}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-2xl font-black mb-8">
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 text-zinc-400 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section
        id="quote"
        className="py-20 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-10 shadow-2xl">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
                Free Quote
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Get a Fast Cash Offer
              </h2>
              <p className="mt-4 text-zinc-400">
                Fill out the form and we’ll contact you quickly.
              </p>
            </div>

            <form
  action="https://formspree.io/f/xzdonloj"
  method="POST"
  className="space-y-6"
>
              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Name
                </label>
                <input
  type="text"
  name="name"
  placeholder="Your name"
  className="w-full bg-black border border-zinc-700 focus:border-blue-500 outline-none rounded-2xl px-5 py-4"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Phone Number
                </label>
                <input
  type="tel"
  name="phone"
  placeholder="Your phone number"
  className="w-full bg-black border border-zinc-700 focus:border-blue-500 outline-none rounded-2xl px-5 py-4"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Device Information
                </label>
                <textarea
  rows={5}
  name="device"
  placeholder="Example: iPhone 13 Pro Max, cracked back, locked to T-Mobile"
  className="w-full bg-black border border-zinc-700 focus:border-blue-500 outline-none rounded-2xl px-5 py-4"
/>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 transition-all py-4 rounded-2xl text-lg font-black"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: 'Do you buy broken phones?',
                a: 'Yes. We buy cracked, damaged, dead, and non-working devices.',
              },
              {
                q: 'Do you buy carrier-locked phones?',
                a: 'Yes. Locked phones are accepted depending on condition and carrier.',
              },
              {
                q: 'How fast can we meet?',
                a: 'In many cases, same-day meetups are available around Omaha and nearby areas.',
              },
              {
                q: 'What payment methods do you offer?',
                a: 'Cash payments are available for local meetups.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-black border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold">{item.q}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready To Sell Your Device?
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Fast offers. Local meetups. Same-day cash.
          </p>

          <a
            href="tel:5312139198"
            className="inline-block mt-10 bg-green-500 hover:bg-green-400 text-black transition-all px-10 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-green-500/20"
          >
            Call 531-213-9198
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
          <p>© 2026 Alex The Phone Guy. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Omaha, Nebraska</span>
            <span>Bellevue</span>
            <span>Council Bluffs</span>
            <span>Lincoln</span>
          </div>
        </div>
      </footer>

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:5312139198"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-black px-6 py-4 rounded-full shadow-2xl font-black text-lg"
      >
        📞 Call Now
      </a>
    </div>
  );
}
