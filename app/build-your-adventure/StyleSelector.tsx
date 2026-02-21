"use client"

import { Style } from "@/types/builder"

type Props = {
  value: Style
  onSelect: (style: Style) => void
  onNext: () => void
  onBack: () => void
}

export default function StyleSelector({
  value,
  onSelect,
  onNext,
  onBack,
}: Props) {
  return (
    <div className="space-y-10">

      <div className="grid md:grid-cols-3 gap-8">

        {/* Scenic */}
        <div
          onClick={() => onSelect("scenic")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "scenic"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-xl font-light mb-3">🌄 Scenic Explorer</h3>
          <p className="text-black/60 text-sm">
            Smooth routes, epic views, photography stops.
          </p>
        </div>

        {/* Gravel */}
        <div
          onClick={() => onSelect("gravel")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "gravel"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-xl font-light mb-3">🏔 Gravel Adventure</h3>
          <p className="text-black/60 text-sm">
            Remote backroads, balanced terrain, moderate challenge.
          </p>
        </div>

        {/* Technical */}
        <div
          onClick={() => onSelect("technical")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
            value === "technical"
              ? "border-black shadow-lg scale-[1.02]"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <h3 className="text-xl font-light mb-3">🔥 Technical Terrain</h3>
          <p className="text-black/60 text-sm">
            Challenging routes, off-grid sections, experienced riders.
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