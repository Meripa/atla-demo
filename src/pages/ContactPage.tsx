const ContactPage = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-32">

      {/* HERO */}
      <section className="text-center px-6 mb-16">
        <h1 className="text-5xl font-serif mb-4">
          Võta meiega ühendust
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Küsimused, koostöö või külastus – kirjuta meile ja leiame lahenduse.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT - INFO */}
        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-serif mb-4">Kontakt</h2>
            <p className="text-zinc-400">EBD Group OÜ</p>
            <p className="text-zinc-400">Atla Viinaköök</p>
            <p className="text-zinc-400">Kesk tee 12, Jüri</p>
            <p className="text-zinc-400">Harjumaa, Eesti</p>
          </div>

          <div>
            <p className="text-zinc-400">Email:</p>
            <p className="text-white">info@ebd.ee</p>
          </div>

          <div>
            <p className="text-zinc-400">Telefon:</p>
            <p className="text-white">+372 578 77 220</p>
          </div>


        </div>

        {/* RIGHT - FORM */}
        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-2xl font-serif mb-6">
            Kirjuta meile
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Nimi"
              className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
            />

            <textarea
              placeholder="Sinu sõnum..."
              rows={4}
              className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
            />

            <button
              type="submit"
              className="w-full py-3 bg-amber-500 text-black rounded-full hover:bg-amber-400"
            >
              Saada sõnum →
            </button>

          </form>

        </div>

      </div>

      {/* MAP */}
      <section className="mt-20 px-6">
        <div className="max-w-6xl mx-auto h-100 rounded-2xl overflow-hidden">
            <a
            href="https://www.google.com/maps?q=Kesk+tee+12+Jüri"
            target="_blank"
            ></a>
            <iframe
            src="https://www.google.com/maps?q=Kesk%20tee%2012%20J%C3%BCri&z=14&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            ></iframe>
        </div>
      </section>

    </div>
  )
}

export default ContactPage