"use client"

import { useState } from "react"

type Props = {
  value: number
  onSelect: (duration: number) => void
  onNext: () => void
  onBack: () => void
}

export default function DurationSelector({
  value,
  onSelect,
  onNext,
  onBack,
}: Props) {

  const options = [
  { label: "3–5 Days", value: 4 },
  { label: "6–9 Days", value: 7 },
  { label: "10–14 Days", value: 12 },
  { label: "Custom Range", value: "custom" },
  
]

const [isCustom, setIsCustom] = useState(false)
const [customDays, setCustomDays] = useState(value || 3)

  return (
    <div className="space-y-12 transition-opacity duration-500 opacity-100">

      <h2 className="text-3xl md:text-4xl font-light text-center tracking-wide">
        Choose Your Duration
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
  {options.map((option) => {
    const isSelected =
      option.value === "custom"
        ? isCustom
        : value === option.value

    return (
      <div
        key={option.label}
        onClick={() => {
          if (option.value === "custom") {
            setIsCustom(true)
          } else {
            setIsCustom(false)
            onSelect(option.value as number)
          }
        }}
        className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
          isSelected
            ? "border-black shadow-lg scale-[1.02]"
            : "border-black/10 hover:border-black/30"
        }`}
      >
        <p className="text-lg font-light">{option.label}</p>
      </div>
    )
  })}
</div>

{isCustom && (
  <div className="mt-10 text-center">
    <label className="block text-sm text-black/60 mb-3">
      How many days?
    </label>

    <input
      type="number"
      min={2}
      max={30}
      value={customDays}
      onChange={(e) => {
        const days = Number(e.target.value)
        setCustomDays(days)
        onSelect(days)
      }}
      className="w-32 px-4 py-3 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
)}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full border border-black/20 hover:border-black transition"
        >
          Back
        </button>

        <button
          disabled={!value}
          onClick={onNext}
          className={`px-8 py-3 rounded-full transition ${
            value
              ? "bg-black text-white hover:bg-black/90"
              : "bg-black/10 text-black/40 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>

    </div>
  )
}