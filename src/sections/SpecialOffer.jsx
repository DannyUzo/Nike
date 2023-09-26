import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { Fade,Roll, Slide} from "react-awesome-reveal";



const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <Fade>
      <div className="flex-1">
        <img src={offer} width={773} height={687} alt="offer of the month" className="object-contain w-full"/>
      </div>
      </Fade>
        <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
         <span className="text-coral-red">Special</span> offer
        </h2>
        <Slide>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shoping journey that 
          redefines your experience with unbeatable
           deals. From premier selections to 
           incredible savings, we offer unparalleledd 
           value that sets us apart
        </p>
        </Slide>
        <Slide>
        <p className="mt-6 lg:max-w-lg info-text">
         Navigate a realm of possibilities designed
          to fulfill your unique desires, surpassing
           the loftiest expectations. Your journey 
           with us is nothing short of expectional
        </p>
        </Slide>
        <div className="mt-11 flex flex-wrap gap-4">
          <Roll>
          <Button label="Shop now" iconURL={arrowRight} />
          </Roll>
          <Roll>
          <Button label="Label more" backgroundColor="border-slate-gray" textColor="text-slate-gray" />
          </Roll>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer