"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Watch,
  Headphones,
  Package,
  Wrench,
  Building2,
  GraduationCap,
  Recycle,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function WholesalePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const faqs = [
  {
    question: "What types of electronics do you buy?",
    answer:
      "We purchase smartphones, tablets, laptops, smartwatches, gaming consoles, networking equipment, POS systems and other wholesale electronics.",
  },
  {
    question: "Do you buy damaged or locked devices?",
    answer:
      "Yes. We purchase working, damaged, carrier-locked and customer trade-in devices depending on condition and quantity.",
  },
  {
    question: "Who do you buy from?",
    answer:
      "We work with businesses, schools, retailers, repair shops, wholesalers, recyclers and organizations with bulk inventory.",
  },
  {
    question: "How quickly do you provide quotes?",
    answer:
      "Most quote requests receive a response within one business day.",
  },
  {
    question: "Do you offer pickup or shipping?",
    answer:
      "Yes. We offer local pickup in Omaha and can arrange shipping for larger wholesale lots.",
  },
];

  const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alex The Phone Guy",
  url: "https://alexthephoneguy.com",
  telephone: "+15312139198",
  image: "https://alexthephoneguy.com/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Omaha",
    addressRegion: "NE",
    addressCountry: "US",
  },
  areaServed: "United States",
  description:
    "Wholesale electronics buyer specializing in smartphones, laptops, tablets, smartwatches, gaming consoles and bulk inventory."
};

  return (
    <main className="min-h-screen bg-white text-gray-900">

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>

      {/* Hero */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
<div>
          <h1 className="text-5xl font-bold mb-6">
            Sell Your Wholesale Inventory
          </h1>

           <p className="text-xl text-gray-300 max-w-3xl mb-8">
            We purchase wholesale lots of smartphones, tablets, laptops, smartwatches and consumer electronics from businesses, schools, repair shops, recyclers and liquidators.
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
    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
      <Image
        src="/hero-wholesale-v2.jpeg"
        alt="Wholesale electronics"
        fill
        className="object-contain"
sizes="(min-width:1024px) 50vw, 100vw"
        priority
      />
    </div>

  </div>
</section>

  {/* What We Buy */}
<section className="bg-gray-50">
  <div className="max-w-[1500px] mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold text-center mb-12">
    What We Buy
</h2>

    <div className="max-w-[1500px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

  {/* Smartphones */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Smartphone className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Smartphones</h3>

    <p className="text-gray-600 leading-7">
      Apple iPhone, Samsung Galaxy, Google Pixel, Motorola, OnePlus and more.
    </p>
  </div>

  {/* Laptops */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Laptop className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Laptops</h3>

    <p className="text-gray-600 leading-7">
      MacBook, Dell, HP, Lenovo, ASUS, Acer and Microsoft Surface.
    </p>
  </div>

  {/* Tablets */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Tablet className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Tablets</h3>

    <p className="text-gray-600 leading-7">
      Apple iPad, Galaxy Tab, Microsoft Surface and Lenovo tablets.
    </p>
  </div>

  {/* Game Consoles */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Gamepad2 className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Game Consoles</h3>

    <p className="text-gray-600 leading-7">
      PlayStation, Xbox, Nintendo Switch and gaming accessories.
    </p>
  </div>

  {/* Smartwatches */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Watch className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Smartwatches</h3>

    <p className="text-gray-600 leading-7">
      Apple Watch, Galaxy Watch, Garmin, Fitbit and more.
    </p>
  </div>

  {/* Mobile Accessories */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Headphones className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Mobile Accessories</h3>

    <p className="text-gray-600 leading-7">
      AirPods, chargers, cables, docks, keyboards, mice and headphones.
    </p>
  </div>

  {/* Bulk Electronics */}
  <div className="group h-full min-h-[300px] p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
      <Package className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
    </div>

    <h3 className="text-2xl font-semibold mb-4">Bulk Electronics</h3>

    <p className="text-gray-600 leading-7">
      Networking equipment, POS systems, consumer electronics and mixed wholesale lots.
    </p>
  </div>

</div>

<div className="mt-16 overflow-hidden py-6">
  <div className="flex animate-marquee whitespace-nowrap">
   {[
  "apple",
  "asus",
  "dell",
  "garmin",
  "google",
  "hp",
  "lenovo",
  "motorola",
  "oneplus",
  "playstation",
  "samsung",

  // duplicate for seamless loop

  "apple",
  "asus",
  "dell",
  "garmin",
  "google",
  "hp",
  "lenovo",
  "motorola",
  "oneplus",
  "playstation",
  "samsung",
].map((brand, index) => (
  <div
    key={index}
    className="mx-14 flex h-16 items-center justify-center"
  >
    <Image
      src={`/brands/${brand}.svg`}
      alt={brand}
      width={190}
      height={70}
      className="h-10 w-auto object-contain"
    />
  </div>
))}
    
  </div>
</div>

    </div>  

    </div>

  
</section>

      {/* Who We Work With */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            We Buy From
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
      <Smartphone className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">Wireless Retailers</h3>
    <p className="text-gray-600 leading-7">
      Carrier stores, electronics retailers and excess inventory.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
      <Building2 className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">Businesses</h3>
    <p className="text-gray-600 leading-7">
      Office upgrades, IT refreshes and surplus company devices.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
      <GraduationCap className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">Schools</h3>
    <p className="text-gray-600 leading-7">
      Schools, universities and educational technology departments.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
      <Wrench className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">Repair Shops</h3>
    <p className="text-gray-600 leading-7">
      Working, damaged and customer trade-in devices.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
      <Recycle className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">Recyclers</h3>
    <p className="text-gray-600 leading-7">
      Asset recovery, recycling companies and liquidation partners.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
      <Briefcase className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">Wholesalers</h3>
    <p className="text-gray-600 leading-7">
      Bulk electronics, closeouts and wholesale inventory lots.
    </p>
  </div>

</div>          

        </div>

      </section>

{/* Why Choose Us */}

<section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex justify-center mb-6">
  <div className="inline-flex items-center rounded-full bg-blue-500/20 text-blue-300 px-4 py-1 text-sm font-medium">
    WHY CHOOSE US
  </div>
</div>

    <h2 className="text-4xl font-bold text-center mb-4">
      Why Choose Alex The Phone Guy?
    </h2>

    <p className="text-gray-300 text-center max-w-2xl mx-auto mb-14">
      We make selling wholesale electronics simple, transparent and fast.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">Fast Quotes</h3>
        <p className="text-gray-300">
          Receive a wholesale quote within one business day.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">Competitive Pricing</h3>
        <p className="text-gray-300">
          Fair market pricing for smartphones, tablets, laptops and bulk electronics.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">Trusted Buyer</h3>
        <p className="text-gray-300">
          Serving businesses, schools, retailers, repair shops and wholesalers.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-">Flexible Logistics</h3>
        <p className="text-gray-300">
          Local pickup in Omaha and shipping options for larger wholesale lots.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">Secure Transactions</h3>
        <p className="text-gray-300">
          Clear communication, documented offers and reliable payment methods.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">Bulk Specialists</h3>
        <p className="text-gray-300">
          We focus on wholesale quantities rather than single-device purchases.
        </p>
      </div>

    </div>
  </div>
</section>


    {/* How It Works */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">
    How It Works
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="border rounded-xl p-8 shadow-sm">
      <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
      <h3 className="text-2xl font-semibold mb-3">
        Submit Your Inventory
      </h3>
      <p className="text-gray-600">
        Fill out the form with your device models, quantities, condition, or simply upload a list or photos.
      </p>
    </div>

    <div className="border rounded-xl p-8 shadow-sm">
      <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
      <h3 className="text-2xl font-semibold mb-3">
        Receive an Offer
      </h3>
      <p className="text-gray-600">
        We review your inventory and usually respond within one business day with a competitive wholesale offer.
      </p>
    </div>

    <div className="border rounded-xl p-8 shadow-sm">
      <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
      <h3 className="text-2xl font-semibold mb-3">
        Ship & Get Paid
      </h3>
      <p className="text-gray-600">
        Once accepted, we'll coordinate shipping or pickup and send payment promptly by wire transfer, ACH, or another agreed method.
      </p>
    </div>

  </div>
</section>


      {/* FAQ */}

<section className="bg-gray-50 py-24">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Frequently Asked Questions
    </h2>

    <p className="text-gray-600 text-center mb-14">
      Answers to the most common questions about selling wholesale electronics.
    </p>

      <div className="space-y-4">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() =>
          setOpenFAQ(openFAQ === index ? null : index)
        }
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-lg">
          {faq.question}
        </span>

        {openFAQ === index ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {openFAQ === index && (
        <div className="px-6 pb-8 text-gray-600 leading-7">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

  </div>
</section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6 text-center">
Have Wholesale Inventory to Sell?
</h2>

          <p className="text-xl text-gray-600 mb-10">
           Fast payment. Competitive offers. Response typically within one business day.
          </p>

          <a
  href="tel:+15312139198"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-lg text-lg font-semibold transition"
>
  Call (531) 213-9198
</a>

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

<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

    <div>
      <h3 className="text-2xl font-bold mb-3">Alex The Phone Guy</h3>
<p className="text-gray-300 max-w-sm leading-7">
  We buy wholesale lots of smartphones, tablets, laptops,
  smartwatches, gaming consoles, and other consumer electronics from
  businesses, schools, recyclers, and liquidators.
</p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">Contact</h4>
<a
  href="tel:+15312139198"
  className="block hover:text-blue-400 transition"
>
  (531) 213-9198
</a>

<a
  href="mailto:sell@alexthephoneguy.com"
  className="block hover:text-blue-400 transition"
>
  sell@alexthephoneguy.com
</a>
    </div>

    <div>
      <h4 className="font-semibold mb-3">Location</h4>
      <p>Omaha, Nebraska</p>
      <p>United States</p>
    </div>

    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
  © {new Date().getFullYear()} Alex The Phone Guy. All rights reserved.
</div>

  </div>
</footer>

    </main>
  );
}

