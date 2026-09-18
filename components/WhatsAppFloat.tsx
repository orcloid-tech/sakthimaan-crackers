import { shopInfo } from "@/lib/products";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    `Vanakkam ${shopInfo.nameEn}! I'd like to know more about your crackers price list.`
  );
  return (
    <a
      href={`https://wa.me/${shopInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-flame-400 ring-2 ring-white animate-sparkle" />
    </a>
  );
}
