"use client"

import { BuilderState } from "@/types/builder"

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-ZA").format(amount)

type Props = {
  state: BuilderState
  price: number
  baseTotal: number
  regionExtra: number
  comfortExtra: number
  styleMultiplier: number
}

export default function SummaryPanel({
  state,
  price,
  baseTotal,
  regionExtra,
  comfortExtra,
  styleMultiplier,
}: Props) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl sticky top-32">
      <h3 className="text-lg mb-6 font-light tracking-wide">
        Your Expedition
      </h3>

      <div className="space-y-4 text-sm">

        <div>
          <span className="text-white/50">Platform</span>
          <div className="mt-1">
            {state.platform || "Not selected"}
          </div>
        </div>

        <div>
          <span className="text-white/50">Region</span>
          <div className="mt-1">
            {state.region || "Not selected"}
          </div>
        </div>

        <div>
          <span className="text-white/50">Duration</span>
          <div className="mt-1">
            {state.duration} days
          </div>
        </div>

        <div>
          <span className="text-white/50">Style</span>
          <div className="mt-1">
            {state.style || "Not selected"}
          </div>
        </div>

        <div>
          <span className="text-white/50">Comfort</span>
          <div className="mt-1">
            {state.comfort}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 mt-6">
          <span className="text-white/50">Estimated Price</span>
          <div className="mt-4 space-y-3 text-sm">

  <div className="flex justify-between">
    <span className="text-white/50">Base Package</span>
    <span>{formatCurrency(baseTotal)}</span>
  </div>

  {regionExtra > 0 && (
  <div className="flex justify-between">
    <span className="text-white/50">Region Adjustment</span>
    <span>{formatCurrency(regionExtra)}</span>
  </div>
)}

{comfortExtra > 0 && (
  <div className="flex justify-between">
    <span className="text-white/50">Comfort Upgrade</span>
    <span>{formatCurrency(comfortExtra)}</span>
  </div>
)}

{styleMultiplier !== 1 && (
  <div className="flex justify-between">
    <span className="text-white/50">Style Multiplier</span>
    <span>x {styleMultiplier}</span>
  </div>
)}

  <div className="border-t border-white/10 pt-4 mt-4 flex justify-between text-lg font-medium">
    <span>Total</span>
    <span>{formatCurrency(price)}</span>
  </div>

</div>
        </div>

      </div>
    </div>
  )
}