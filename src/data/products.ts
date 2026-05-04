import hydrofuel from "../assets/products/hydrofuel.png"
import energy from "../assets/products/energy.png"
import recovery from "../assets/products/recovery.png"
import ultra from  "../assets/products/ultra.png"

export const products = [
  {
    id: 1,
    name: "HydroFuel X",
    desc: "Fast hydration and energy boost.",
    shortDesc: "Electrolyte drink for peak performance.",
    price: 2.99,
    image: hydrofuel,

    sku: "HF-001",
    size: "500 ml",
    flavor: "Lemon Lime",

    description: "A performance drink designed to keep you hydrated and energized during intense workouts.",

    details: {
      purpose: "Hydration & Performance",
      electrolytes: "Sodium, Potassium, Magnesium",
      caffeine: "80mg",
      sugar: "Low sugar",
      ingredients: "Water, electrolytes, natural flavors",
      flavor: "Citrus",
      usage: "Before or during training",
      bestFor: "Gym, running, volleyball"
    }
  },

  {
    id: 2,
    name: "Energy Surge",
    desc: "Explosive energy for intense sessions.",
    shortDesc: "Boost your focus and endurance.",
    price: 3.49,
    image: energy,

    sku: "ES-002",
    size: "500 ml",
    flavor: "Berry Blast",

    description: "High-performance energy drink built for maximum output and endurance.",

    details: {
      purpose: "Energy & Focus",
      electrolytes: "Sodium, Potassium",
      caffeine: "120mg",
      sugar: "Medium",
      ingredients: "Water, caffeine, natural flavors",
      flavor: "Berry",
      usage: "Before training",
      bestFor: "HIIT, gym, competitions"
    }
  },

  {
    id: 3,
    name: "Recovery Flow",
    desc: "Recover faster. Train harder.",
    shortDesc: "Post-workout recovery drink.",
    price: 2.79,
    image: recovery,

    sku: "RF-003",
    size: "500 ml",
    flavor: "Tropical",

    description: "Designed to speed up recovery and restore hydration after workouts.",

    details: {
      purpose: "Recovery",
      electrolytes: "Magnesium, Potassium",
      caffeine: "0mg",
      sugar: "Low sugar",
      ingredients: "Water, minerals, vitamins",
      flavor: "Tropical",
      usage: "After training",
      bestFor: "Recovery, endurance sports"
    }
  },

  {
    id: 4,
    name: "Ultra Hydrate",
    desc: "Pure hydration. Zero crash.",
    shortDesc: "Clean hydration formula.",
    price: 2.49,
    image: ultra,

    sku: "UH-004",
    size: "500 ml",
    flavor: "Watermelon",

    description: "Light and refreshing hydration drink with essential electrolytes.",

    details: {
      purpose: "Hydration",
      electrolytes: "Sodium, Potassium",
      caffeine: "0mg",
      sugar: "Zero sugar",
      ingredients: "Water, electrolytes",
      flavor: "Watermelon",
      usage: "Anytime",
      bestFor: "Daily hydration"
    }
  }
]