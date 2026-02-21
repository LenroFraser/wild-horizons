import AdventureCategories from "./components/AdventureCategories"

export default function Home() {
  return (
    <>


      {/* HERO SECTION */}
<section
  className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/hero.jpg')" }}
>
  {/* TRUST / POSITIONING SECTION */}
<section className="bg-white text-black py-24 px-8 md:px-24">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-medium mb-6">
      Not Just a Tour. A Personal Expedition.
    </h2>

    <p className="text-lg text-black/70 max-w-3xl mx-auto mb-16">
      Every journey we create is tailored around your riding experience,
      terrain preference, travel pace, and comfort expectations.
      From rugged mountain passes to vast desert horizons,
      your expedition is designed with intention.
    </p>

    <div className="grid md:grid-cols-3 gap-12 text-left">

      <div>
        <h3 className="text-xl font-medium mb-3">
          Tailor-Made Planning
        </h3>
        <p className="text-black/70">
          Choose your platform, region, terrain style, and comfort level.
          We craft your route around you — not the other way around.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-3">
          Multi-Platform Options
        </h3>
        <p className="text-black/70">
          Ride solo, travel with a partner, or explore by 4x4.
          Your expedition adapts to how you want to experience Africa.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-3">
          Southern Africa Expertise
        </h3>
        <p className="text-black/70">
          From the Cape to neighbouring countries,
          we curate routes that balance adventure, safety,
          and unforgettable landscapes.
        </p>
      </div>

    </div>

  </div>
</section>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    <div className="uppercase tracking-[0.3em] text-sm text-white/70 mb-6">
      Wild Horizons
    </div>

    <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
      Tailor-Made Adventure Expeditions
      <br className="hidden md:block" />
      Across Southern Africa
    </h1>

    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
      Motorcycle and 4x4 journeys designed around your pace, terrain preference,
      and comfort level — from the Cape to Namibia and beyond.
    </p>

    <a
      href="/build-your-adventure"
      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-4 rounded-lg transition duration-300"
    >
      Design Your Expedition
    </a>

  </div>
</section>

      {/* JOURNEY STYLES SECTION */}
      <section id="journeys" className="bg-white text-black py-28 md:py-36 px-8 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
  <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
    Choose Your Journey
  </h2>
  <div className="mt-4 h-[2px] w-20 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
</div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group cursor-pointer transition-all duration-500 hover:-translate-y-2">
              <div
                className="h-72 bg-cover bg-center rounded-xl shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                style={{ backgroundImage: "url('4x4.jpeg')" }}
              />
              <h3 className="mt-6 text-xl font-medium">4x4 Overland</h3>
              <p className="text-gray-600 mt-2">
                Explore remote landscapes with comfort and capability.
              </p>
            </div>

            <div className="group cursor-pointer transition-all duration-500 hover:-translate-y-2">
              <div
                className="h-72 bg-cover bg-center rounded-xl shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                style={{ backgroundImage: "url('family.jpeg')" }}
              />
              <h3 className="mt-6 text-xl font-medium">Family & Friends</h3>
              <p className="text-gray-600 mt-2">
                Shared experiences designed for meaningful connection.
              </p>
            </div>

            <div className="group cursor-pointer transition-all duration-500 hover:-translate-y-2">
              <div
                className="h-72 bg-cover bg-center rounded-xl shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                style={{ backgroundImage: "url('couples2.jpeg')" }}
              />
              <h3 className="mt-6 text-xl font-medium">Couples Escapes</h3>
              <p className="text-gray-600 mt-2">
                Romantic, refined journeys through breathtaking scenery.
              </p>
            </div>
          </div>
           <div className="text-center mt-20 md:mt-24">
      <a
        href="/build-your-adventure"
        className="inline-block border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
      >
        Start Designing My Expedition
      </a>
    </div>

  </div>
</section>
      <AdventureCategories />
    </>
  );
}