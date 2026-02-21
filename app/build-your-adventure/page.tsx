"use client"

import { useState } from "react"
import ExpeditionSelector from "./ExpeditionSelector"
import DurationSelector from "./DurationSelector"
import StepIndicator from "./StepIndicator"
import SummaryPanel from "./SummaryPanel"
import RegionSelector from "./RegionSelector"
import { BuilderState } from "@/types/builder"
import StyleSelector from "./StyleSelector"
import ComfortSelector from "./ComfortSelector"
import { calculatePrice } from "@/lib/calculatePrice"
import {
  BASE_PRICE_PER_DAY,
  REGION_MODIFIER,
  COMFORT_MODIFIER,
  STYLE_MULTIPLIER,
} from "@/lib/pricingConfig"
import LeadForm from "./LeadForm"

export default function BuildYourAdventure() {
  const [currentStep, setCurrentStep] = useState(1)

  const [builderState, setBuilderState] = useState<BuilderState>({
    platform: "selfRide",
    duration: 3,
    style: "scenic",
    region: "cape",
    comfort: "adventure",
  })

  // ✅ Derived values AFTER state
  const price = calculatePrice(builderState)

  const basePerDay = BASE_PRICE_PER_DAY[builderState.platform] ?? 0
  const baseTotal = basePerDay * builderState.duration

  const regionExtra = REGION_MODIFIER[builderState.region] ?? 0
  const comfortExtra = COMFORT_MODIFIER[builderState.comfort] ?? 0
  const styleMultiplier = STYLE_MULTIPLIER[builderState.style] ?? 1

  const subtotal = baseTotal + regionExtra + comfortExtra


  return (
    <main className="min-h-screen bg-black text-white">

      {/* Intro Section */}
    {/* BUILDER INTRO SECTION */}
<section className="bg-black text-white py-32 px-6 text-center">
  <div className="max-w-4xl mx-auto">

    <div className="uppercase tracking-[0.3em] text-sm text-white/60 mb-6">
      Wild Horizons
    </div>

    <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
      Design Your Tailor-Made Expedition
    </h1>

    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
      Select your preferred platform, terrain style, region, and comfort level.
      We’ll shape your journey around your vision of adventure.
    </p>

    <div className="h-[1px] w-24 bg-yellow-500 mx-auto" />

  </div>
</section>

      {/* Builder Section */}
      <section
  id="builder"
  className="bg-white text-black py-28 px-6 rounded-t-[60px] shadow-[0_-20px_60px_rgba(0,0,0,0.1)]"
>
        <div className="max-w-5xl mx-auto">

          <StepIndicator currentStep={currentStep} />

          <div className="grid md:grid-cols-3 gap-12 mt-12">

            <div className="md:col-span-2">
           {currentStep === 1 && (
  <ExpeditionSelector
    value={builderState.platform}
    onSelect={(platform) =>
      setBuilderState(prev => ({ ...prev, platform }))
    }
    onNext={() => setCurrentStep(2)}
  />
)}

{currentStep === 2 && (
  <DurationSelector
    value={builderState.duration}
    onSelect={(duration) =>
      setBuilderState(prev => ({ ...prev, duration }))
    }
    onNext={() => setCurrentStep(3)}
    onBack={() => setCurrentStep(1)}
  />
)}

{currentStep === 3 && (
  <StyleSelector
    value={builderState.style}
    onSelect={(style) =>
      setBuilderState(prev => ({ ...prev, style }))
    }
    onNext={() => setCurrentStep(4)}
    onBack={() => setCurrentStep(2)}
  />
)} 

{currentStep === 4 && (
  <RegionSelector
    value={builderState.region}
    onSelect={(region) =>
      setBuilderState(prev => ({ ...prev, region }))
    }
    onNext={() => setCurrentStep(5)}
    onBack={() => setCurrentStep(3)}
  />
)}

{currentStep === 5 && (
  <ComfortSelector
    value={builderState.comfort}
    onSelect={(comfort) =>
      setBuilderState(prev => ({ ...prev, comfort }))
    }
    onBack={() => setCurrentStep(4)}
  />
)}
            </div>

            <SummaryPanel
  state={builderState}
  price={price}
  baseTotal={baseTotal}
  regionExtra={regionExtra}
  comfortExtra={comfortExtra}
  styleMultiplier={styleMultiplier}
/>
</div>
        </div>
      </section>   {/* closes Builder Section */}
      
      <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <LeadForm state={builderState} price={price} />
        </div>
      </section>
    </main>
  );
}