import { ChevronRight, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-red-900/30 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          {/* Brand & About Column */}
          <div className="space-y-4">
            <div>
              <span className="bg-amber-400 text-red-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                中華レストラン
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1 tracking-tight">
                BAMIYAN{" "}
                <span className="text-amber-400 font-normal text-lg">
                  バーミヤン
                </span>
              </h2>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Serving authentic Japanese-Chinese fusion cuisine. From crispy
              handmade gyoza to flame-tossed wok specialties, experience Japan's
              favorite neighborhood diner flavors.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#instagram"
                className="p-2 bg-neutral-900 rounded-full hover:bg-red-600 text-neutral-400 hover:text-white transition-colors"
              ></a>
              <a
                href="#facebook"
                className="p-2 bg-neutral-900 rounded-full hover:bg-red-600 text-neutral-400 hover:text-white transition-colors"
              ></a>
              <a
                href="#twitter"
                className="p-2 bg-neutral-900 rounded-full hover:bg-red-600 text-neutral-400 hover:text-white transition-colors"
              ></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-red-600 pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                "Menu & Takeout",
                "Store Locator",
                "Drink Bar & Desserts",
                "Allergen & Nutrition Info",
                "Gift Cards & Coupons",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-red-500 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Info Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-red-600 pl-2">
              Store Hours
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    Mon - Fri:
                  </span>
                  <span>10:00 AM – 11:30 PM (L.O. 11:00 PM)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    Sat, Sun & Holidays:
                  </span>
                  <span>10:00 AM – 12:00 AM (L.O. 11:30 PM)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-red-600 pl-2">
              Customer Support
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Tokyo Head Office & Regional Branches</span>
              </li>
              <li className="flex items-center gap-2">
                <span>0120-123-456 (Toll Free Japan)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Takeout & Delivery Available</span>
              </li>
            </ul>

            {/* Order/Reserve Banner */}
            <div className="mt-4 p-3 bg-red-950/40 border border-red-800/40 rounded-xl text-center">
              <p className="text-[11px] text-amber-200 font-medium">
                Order Online & Skip the Line!
              </p>
              <button className="mt-2 w-full bg-amber-500 hover:bg-amber-400 text-red-950 font-bold text-xs py-1.5 rounded-lg transition-colors">
                Order Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} Skylark Group / Bamiyan Co., Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#privacy"
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#sitemap"
              className="hover:text-neutral-300 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
