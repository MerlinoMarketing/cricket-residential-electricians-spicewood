import { MessageSquareQuote, Phone } from "lucide-react";

import { business } from "@/config/business";
import { toTel } from "@/lib/business";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <a
          href={toTel(business.phone)}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-white"
        >
          <Phone className="size-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700"
        >
          <MessageSquareQuote className="size-4" />
          Free Quote
        </a>
      </div>
    </div>
  );
}
