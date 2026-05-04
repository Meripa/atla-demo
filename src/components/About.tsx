import grupipilt from '../assets/aboutpage/grupipilt.jpg'
import idea from '../assets/aboutpage/idea.png'
import masin from '../assets/aboutpage/masin.png'
import auhind from '../assets/aboutpage/auhind.png'
import tana from '../assets/aboutpage/tana.jpg'
import taust from '../assets/5.png'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=" text-white min-h-screen pt-10 px-6">
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
    <section className="relative w-full overflow-hidden min-h-200 md:min-h-[212 flex items-center">

      {/* 🔥 CENTERED BACKGROUND (ei veni lõpmatuseni) */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-500 h-full relative overflow-hidden">

          <img
            src={grupipilt}
            alt="Atla distillery"
            className="w-full h-full object-cover object-[center_20%] scale-105"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/80" />

        </div>
      </div>

    <div className="relative z-10 w-full max-w-125 mx-auto px-6">

      <div className="text-center md:text-left ">

        {/* heading */}
        <h5 className="text-6xl md:text-6xl font-serif leading-tight tracking-wide">
          Our Story
        </h5>

        {/* text */}
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-md">
        Built for athletes who demand more from every session.
        </p>

        </div>

      </div>
    </section>

    <section className="py-24 ">
        <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-serif text-center mb-20">
             Our Journey
            </h2>

            <div className="space-y-24">

            {/* 2017 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-100 rounded-2xl overflow-hidden">
                <img
                    src={idea}
                    className="w-full h-full object-cover"
                />
                </div>

                <div>
                <h3 className="text-(--colorSecond-light) mb-3">The Idea</h3>
                <p className="text-zinc-400 leading-relaxed">
                    It started with a simple goal: create a sports drink that supports real performance, not just marketing hype. Clean hydration, functional ingredients, and a taste athletes actually want to drink.
                </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <h3 className="text-(--colorSecond-light) mb-3">The Formula</h3>
                <p className="text-zinc-400 leading-relaxed">
                     We focused on what matters during training: electrolytes, hydration, energy, and recovery. Every product is designed with a clear purpose — before, during, or after performance.
                </p>
                </div>

                <div className="h-100 rounded-2xl overflow-hidden order-1 md:order-2">
                <img
                    src={masin}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>

            {/* GROWTH */}
            <div className="grid md:grid-cols-2 gap-12 items-center ">
                <div className="h-100 rounded-2xl overflow-hidden ">
                <img
                    src={auhind}
                    className="w-full h-full object-cover object-[center_20%]"
                />
                </div>

                <div>
                <h3 className="text-(--colorSecond-light) mb-3">Performance Tested</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Our drinks are built around active lifestyles and tested in real training environments — from gym sessions and running to volleyball, HIIT, and competition days.
                </p>
                </div>
            </div>

            {/* TODAY */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <h3 className="text-(--colorSecond-light) mb-3">Today</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Today, we are building a modern performance drink brand focused on hydration, energy, and recovery. Our mission is simple: help athletes train harder, recover better, and stay ready.
                </p>
                </div>

                <div className="h-100 rounded-2xl overflow-hidden order-1 md:order-2">
                <img
                    src={tana}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>

            </div>

        </div>
        </section>





      {/* VALUES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-serif mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-(--colorSecond-light) mb-3">
                Performance
              </h3>
              <p className="text-zinc-400 text-sm">
                Every formula is made to support movement, focus, and output.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-(--colorSecond-light) mb-3">
                Hydration
              </h3>
              <p className="text-zinc-400 text-sm">
                Balanced electrolytes to help your body perform when it matters.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl text-(--colorSecond-light) mb-3">
                Recovery
              </h3>
              <p className="text-zinc-400 text-sm">
                Designed to help you bounce back and prepare for the next session.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-serif mb-6">
          Ready to perform?
        </h2>

        <p className="text-zinc-400 mb-8">
          Discover sports drinks built for training, recovery, and everyday performance.
        </p>

        <Link to="/products"className="px-10 py-4 bg-(--colorSecond) text-black rounded-full hover:bg-(--colorSecond-light)">
          Explore products →
        </Link>
      </section>

    </div>
  )
}

export default About