import { BackgroundBeamsWithCollision } from '@/components/ui/Background'
import { TextAnimate } from '@/components/magicui/text-animate'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'

export default function HeroSection() {

  return (
    <BackgroundBeamsWithCollision>
        <div className="z-10 flex flex-col items-center space-y-6 px-4 sm:px-6 lg:px-8">
           <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-16'>
           <TextAnimate animate="blur-in" as={"p"} duration={1} className='text-lg sm:text-xl font-bold uppercase '>
             Automate
            </TextAnimate>
            <TextAnimate animate="blur-in" as={"p"} duration={1} className='text-lg sm:text-xl font-bold uppercase'>
              Scale
            </TextAnimate>
            <TextAnimate animate="blur-in" as={"p"} duration={1} className='text-lg sm:text-xl font-bold uppercase'>
             Dominate
            </TextAnimate>
           </div>
            <TextAnimate animate="fade-in" as={"h1"} duration={1} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center max-w-4xl uppercase">Shift to B2B where real money is. Automate growth, win premium clients, and scale your business without limits.</TextAnimate>
            <TextAnimate animate="blur-in" as={"p"} duration={1} className="text-center text-gray-600 mt-4 max-w-xl font-bold text-xl sm:text-lg uppercase">More revenue. Less manual work. Ready to scale?</TextAnimate>
            
              <InteractiveHoverButton className={`bg-violet-800 text-white text-center font-medium mt-4 max-w-xl text-sm sm:text-base`} onClick={() => {
                alert('Coming soon!')
              }}>Let's Automate Your Success</InteractiveHoverButton>
              {/* Removed OrbitControls as it was not imported and likely not needed */}
        </div>
    </BackgroundBeamsWithCollision>
  )
}
