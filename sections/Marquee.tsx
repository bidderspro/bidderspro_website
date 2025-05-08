import { Marquee } from '@/components/magicui/marquee'

export default function MarqueeSection() {
  const brands = ["Upwork", "LinkedIn", "Shopify", "Fiverr"];

  return (
    <Marquee  reverse={true} vertical={false} className="bg-transparent p-4 flex items-center justify-center text-center">
      <div className="flex flex-row items-center justify-center gap-30 sm:gap-40 md:gap-60 lg:gap-80 xl:gap-60 repeat-0">
        {brands.map((brand, index) => (
          <span
            key={index}
            className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-70 hover:opacity-100 transition-opacity"
          >
            {brand}
          </span>
        ))}
      </div>
    </Marquee>
  );
}
