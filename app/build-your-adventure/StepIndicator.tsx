"use client"

type Props = {
  currentStep: number
}

const steps = [
  { id: 1, label: "Platform" },
  { id: 2, label: "Duration" },
  { id: 3, label: "Style" },
  { id: 4, label: "Region" },
  { id: 5, label: "Comfort" },
  { id: 6, label: "Review" }
]

export default function StepIndicator({ currentStep }: Props) {
  return (
    <div className="mb-16">

      <div className="relative flex items-center justify-between">

        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2" />

        <div
          className="absolute top-1/2 left-0 h-[2px] bg-black transition-all duration-500 -translate-y-1/2"
          style={{
  width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
}}
        />

        {steps.map((step) => {
          const isActive = currentStep >= step.id

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={`
                  w-12 h-12 flex items-center justify-center rounded-full border-2
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-black text-white border-black scale-105"
                      : "bg-white text-gray-400 border-gray-300"
                  }
                `}
              >
                {step.id}
              </div>

              <span
                className={`mt-3 text-sm tracking-wide ${
                  isActive ? "text-black" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}