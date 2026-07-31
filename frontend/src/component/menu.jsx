import { Flame, Utensils } from "lucide-react";
import { useState } from "react";

const MENU_DATA = {
  categories: [
    { id: "popular", name: "Popular / 人気" },
    { id: "ramen", name: "Ramen & Noodles / ラーメン・麺" },
    { id: "dimsum", name: "Dim Sum & Gyoza / 点心・餃子" },
    { id: "mains", name: "Main Dishes / 主菜" },
    { id: "desserts", name: "Desserts & Drinks / デザート" },
  ],
  items: [
    {
      id: 1,
      category: "popular",
      nameEn: "Bamiyan Signature Gyoza (6 pcs)",
      nameJp: "本格焼餃子 (6個)",
      description:
        "Juicy pork dumpling with crispy skin and fragrant garlic and ginger notes.",
      price: 299,
      badge: "Bestseller",
      spicy: 0,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      category: "popular",
      nameEn: "Mapo Tofu (Szechuan Style)",
      nameJp: "武蔵野麻婆豆腐",
      description:
        "Silken tofu with minced pork in a rich, spicy Szechuan peppercorn sauce.",
      price: 599,
      badge: "Chef Special",
      spicy: 2,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      category: "ramen",
      nameEn: "Special Soy Sauce Ramen",
      nameJp: "バーミヤンラーメン",
      description:
        "Classic chashu pork, seasoned bamboo shoots, and soft-boiled egg in fish-chicken broth.",
      price: 599,
      badge: "",
      spicy: 0,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      category: "ramen",
      nameEn: "Spicy Tantanmen",
      nameJp: "担々麺",
      description:
        "Rich sesame chili broth with savory minced pork and fresh bok choy.",
      price: 749,
      badge: "Spicy",
      spicy: 3,
      image:
        "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      category: "mains",
      nameEn: "Five-Spice Wok Fried Rice",
      nameJp: "チャーハン",
      description:
        "High-heat wok-tossed rice with roast pork, egg, and spring onions.",
      price: 549,
      badge: "",
      spicy: 0,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      category: "dimsum",
      nameEn: "Steamed Xiao Long Bao (4 pcs)",
      nameJp: "小籠包 (4個)",
      description:
        "Steamed soup dumplings filled with hot pork broth. Served with black vinegar.",
      price: 399,
      badge: "Popular",
      spicy: 0,
      image:
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      category: "desserts",
      nameEn: "Annin Tofu (Almond Jelly)",
      nameJp: "アンニン豆腐",
      description: "Silky smooth almond dessert topped with a goji berry.",
      price: 249,
      badge: "Sweet",
      spicy: 0,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80",
    },
  ],
};

export default function BamiyanMenu() {
  const [activeCategory, setActiveCategory] = useState("popular");
  const [cartCount, setCartCount] = useState(0);

  const filteredItems = MENU_DATA.items.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      {/* Header Banner */}
      <header className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 border-b border-amber-500/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-red-950/60 backdrop-blur px-4 py-2 rounded-full border border-amber-400/30">
            <Utensils className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold">
              Orders in Cart:{" "}
              <strong className="text-amber-300">{cartCount}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none border-b border-neutral-800">
          {MENU_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-800/80 rounded-2xl overflow-hidden border border-neutral-700/60 hover:border-red-500/50 transition-all duration-300 flex flex-col sm:flex-row shadow-md hover:shadow-xl group"
            >
              {/* Image Container */}
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Details Section */}
              <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.nameEn}
                      </h3>
                      <p className="text-xs font-medium text-red-400 mb-2">
                        {item.nameJp}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Spicy Level Indicator */}
                  {item.spicy > 0 && (
                    <div className="flex items-center gap-1 mt-2 text-red-400 text-xs">
                      <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                      <span>{Array(item.spicy).fill("🌶️").join("")}</span>
                    </div>
                  )}
                </div>

                {/* Footer Price and Order Button */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-700/50">
                  <span className="text-xl font-extrabold text-amber-400">
                    ¥{item.price.toLocaleString()}{" "}
                    <span className="text-xs text-neutral-500 font-normal">
                      tax incl.
                    </span>
                  </span>

                  <button
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className="bg-red-600 hover:bg-red-500 active:scale-95 text-white font-medium px-4 py-1.5 rounded-lg text-sm transition-all shadow-md shadow-red-950"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
