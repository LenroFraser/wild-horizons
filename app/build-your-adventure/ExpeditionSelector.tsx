"use client"

import { Platform } from "@/types/builder"

type Props = {
  value: Platform
  onSelect: (platform: Platform) => void
  onNext: () => void
}

export default function ExpeditionSelector({
  value,
  onSelect,
  onNext,
}: Props) {
  return (
    <div className="space-y-10">

      <div className="grid md:grid-cols-2 gap-8">

        {/* Motorcycle Option */}
        <div
          onClick={() => onSelect("selfRide")}
          className={`p-10 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "selfRide"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-2xl font-light mb-4">
            🏍 Adventure Motorcycles
          </h3>
          <p className="text-black/60">
            Ride through mountain passes, gravel routes and remote terrain.
          </p>
        </div>

        {/* 4x4 Option */}
        <div
          onClick={() => onSelect("passenger4x4")}
          className={`p-10 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "passenger4x4"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-2xl font-light mb-4">
            🚙 Expedition 4x4
          </h3>
          <p className="text-black/60">
            Explore remote landscapes with comfort, range and flexibility.
          </p>
        </div>

      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
        <button
          disabled={!value}
          onClick={onNext}
          className={`px-8 py-4 rounded-full transition ${
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