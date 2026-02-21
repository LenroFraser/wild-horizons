"use client"

import Image from "next/image"

const categories = [
  { title: "Guided Tours", image: "/4x4.jpeg" },
  { title: "Self-Guided Adventures", image: "/family.jpeg" },
  { title: "Custom Expeditions", image: "/couples.jpeg" },
  { title: "Training & Skills", image: "/hero.jpeg" },
]

export default function AdventureCategories() {
  return (
    <section className="relative bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            Choose Your Adventure
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Crafted journeys for riders who seek something more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

              {/* Text Overlay */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                  {category.title}
                </h3>
                <div className="mt-3 h-[2px] w-12 bg-yellow-500 transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Subtle Shadow Depth */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}