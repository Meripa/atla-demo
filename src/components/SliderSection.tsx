import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const slides = [
  {
    title: "Parim Eesti käsitööbrändi",
    desc: "Avasta meie hoolikalt valmistatud joogid.",
    btn: "Vaata toodet",
    link: "/tooted",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    title: "Külasta Atla Distilleryt",
    desc: "Koge destilleerimise protsessi ja maitset.",
    btn: "Broneeri külastus",
    link: "/tehasetuur",
    image: "https://images.unsplash.com/photo-1527169402691-a3fbf8c0c9d1"
  },
  {
    title: "Meie lugu",
    desc: "Avasta, kuidas kõik alguse sai.",
    btn: "Loe rohkem",
    link: "/about",
    image: "https://images.unsplash.com/photo-1514361892635-cebb6b43c7f0"
  }
]

const SliderSection = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)

  const intervalRef = useRef<number | null>(null)

  // 🔁 START TIMER
  const startTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  // 🛑 STOP TIMER
  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
  }

  // ▶️ TIMER CONTROL
  useEffect(() => {
    if (!paused) {
      startTimer()
    }

    return () => stopTimer()
  }, [paused])

  // 🖱 DRAG HANDLERS
  const handleStart = (x: number) => {
    setIsDragging(true)
    setStartX(x)
  }

  const handleMove = (x: number) => {
    if (!isDragging) return
    setCurrentTranslate(x - startX)
  }

  const handleEnd = () => {
    setIsDragging(false)

    if (currentTranslate < -100) {
      setIndex((prev) => (prev + 1) % slides.length)
    } else if (currentTranslate > 100) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    setCurrentTranslate(0)
    startTimer() // 🔥 reset timer pärast swipe’i
  }

  return (
    <section
      className="relative h-[60vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* SLIDES */}
      <div
        className={`flex h-full ${isDragging ? "" : "transition-transform duration-700 ease-in-out"}`}
        style={{
          transform: `translateX(calc(-${index * 100}% + ${currentTranslate}px))`
        }}

        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}

        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-full shrink-0 relative">

            {/* IMAGE */}
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

              <h2 className="text-4xl md:text-5xl font-serif mb-4">
                {slide.title}
              </h2>

              <p className="text-zinc-300 mb-6 max-w-md">
                {slide.desc}
              </p>

              <Link
                to={slide.link}
                className="px-8 py-3 bg-amber-500 text-black rounded-full hover:bg-amber-400"
              >
                {slide.btn}
              </Link>

            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              startTimer() // 🔥 reset timer
            }}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-amber-400 scale-125" : "bg-zinc-500"
            }`}
          />
        ))}
      </div>

    </section>
  )
}

export default SliderSection