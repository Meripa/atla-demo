import taust from '../assets/5.png'

const Contact = () => {
  return (
    <div className=" text-white min-h-screen pt-32">
      {/* BACKGROUND*/}
      <div className="fixed inset-0 -z-20">
        <img
          src={taust}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 blur-[2px]" />
      </div>
      {/* HERO */}
      <section className="text-center px-6 mb-16">
        <h1 className="text-5xl font-serif mb-4">
          Get in touch
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
           Questions, partnerships, or feedback — reach out and we`ll get back to you.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT - INFO */}
        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-serif mb-4">Contact</h2>
            <p className="text-zinc-400">HydroFuel Labs</p>
            <p className="text-zinc-400">Performance Division</p>
            <p className="text-zinc-400">21 Fitness Avenue</p>
            <p className="text-zinc-400">Tallinn</p>
          </div>

          <div>
            <p className="text-zinc-400">Email:</p>
            <p className="text-white">hello@hydrofuel.com</p>
          </div>

          <div>
            <p className="text-zinc-400">Phone:</p>
            <p className="text-white">+111 123 456 789</p>
          </div>


        </div>

        {/* RIGHT - FORM */}
        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-2xl font-serif mb-6">
            Send a message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-(--colorSecond-light)"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-(--colorSecond-light)"
            />

            <textarea
              placeholder="Your message..."
              rows={4}
              className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-(--colorSecond-light)"
            />

            <button
              type="submit"
              className="w-full py-3 bg-(--colorSecond) text-black rounded-full hover:bg-(--colorSecond-light)"
            >
              Send message→
            </button>

          </form>

        </div>

      </div>

      {/* MAP */}
      <section className="mt-20 px-6">
        <div className="max-w-6xl mx-auto h-100 rounded-2xl overflow-hidden">
            <a
            href="https://www.google.com/maps?q=Los+Angeles+California"
            target="_blank"
            ></a>
            <iframe
            src="https://www.google.com/maps?q=Los+Angeles%20California&z=12&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            ></iframe>
        </div>
      </section>

    </div>
  )
}

export default Contact