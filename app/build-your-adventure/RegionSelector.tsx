"use client"

import { Region } from "@/types/builder"

type Props = {
  value: Region
  onSelect: (region: Region) => void
  onNext: () => void
  onBack: () => void
}

export default function RegionSelector({
  value,
  onSelect,
  onNext,
  onBack,
}: Props) {
  return (
    <div className="space-y-10">

      <div className="grid md:grid-cols-3 gap-8">

        {/* Western Cape */}
        <div
          onClick={() => onSelect("cape")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "cape"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-xl font-light mb-3">🌊 Western Cape</h3>
          <p className="text-black/60 text-sm">
            Mountain passes, coastal roads, wine valleys.
          </p>
        </div>

        {/* Namibia */}
        <div
          onClick={() => onSelect("namibia")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "namibia"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-xl font-light mb-3">🏜 Namibia</h3>
          <p className="text-black/60 text-sm">
            Vast deserts, remote gravel, epic isolation.
          </p>
        </div>

        {/* Botswana */}
        <div
          onClick={() => onSelect("botswana")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "botswana"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-xl font-light mb-3">🐘 Botswana</h3>
          <p className="text-black/60 text-sm">
            Wildlife routes, river crossings, safari terrain.
          </p>
        </div>

      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-6 py-3 text-black/60 hover:text-black transition"
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