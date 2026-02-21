"use client"

import { ComfortLevel } from "@/types/builder"

type Props = {
  value: ComfortLevel
  onSelect: (comfort: ComfortLevel) => void
  onBack: () => void
}

export default function ComfortSelector({
  value,
  onSelect,
  onBack,
}: Props) {
  return (
    <div className="space-y-10">

      <div className="grid md:grid-cols-3 gap-8">

        <div
          onClick={() => onSelect("explorer")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all ${
            value === "explorer"
              ? "border-black shadow-lg"
              : "border-black/10"
          }`}
        >
          Explorer
        </div>

        <div
          onClick={() => onSelect("adventure")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all ${
            value === "adventure"
              ? "border-black shadow-lg"
              : "border-black/10"
          }`}
        >
          Adventure
        </div>

        <div
          onClick={() => onSelect("premium")}
          className={`p-8 rounded-2xl border cursor-pointer transition-all ${
            value === "premium"
              ? "border-black shadow-lg"
              : "border-black/10"
          }`}
        >
          Premium
        </div>

      </div>

      <div className="flex justify-between pt-6">
        <button onClick={onBack}>Back</button>
      </div>

    </div>
  )
}