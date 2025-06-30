import { Marquee } from '@/components/magicui/marquee'

export default function MarqueeSection() {
  const brands = ["Upwork", "LinkedIn", "Shopify", "Fiverr"];

  return (
    <Marquee  reverse={true} vertical={false} className="bg-transparent p-4 flex items-center justify-center text-center">
      <div className="flex flex-row items-center justify-center gap-16 sm:gap-20 md:gap-24 lg:gap-32 xl:gap-40">
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
