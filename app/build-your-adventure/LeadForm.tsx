"use client"

import { useState } from "react"
import { BuilderState } from "@/types/builder"

type Props = {
  state: BuilderState
  price: number
}

export default function LeadForm({ state, price }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    notes: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    console.log("Lead Submitted:", {
      ...form,
      expedition: state,
      estimatedPrice: price,
    })

    alert("Thank you! We’ll contact you within 24 hours.")
  }

  return (
    <div className="mt-24 bg-white text-black p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-light mb-6 text-center">
        Request Your Expedition Plan
      </h2>

      <p className="text-center text-black/60 mb-12">
        We’ll personally review your preferences and send a tailored proposal within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />

        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number (with country code)"
          required
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />

        <textarea
          name="notes"
          placeholder="Any special requests or preferences?"
          onChange={handleChange}
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg hover:bg-black/90 transition"
        >
          Submit Expedition Request
        </button>

      </form>
    </div>
  )
}