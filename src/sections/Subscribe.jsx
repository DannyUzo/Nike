import Button from "../components/Button";
import { JackInTheBox,Fade } from "react-awesome-reveal";




const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <JackInTheBox>
     <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
      Sign up For <span className="text-coral-red"> Updates</span> & Newsletter </h3>
      </JackInTheBox>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe@nike.com" className="input"/>
      <Fade>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label='Sign Up' full-Width/>
        </div>
      </Fade>
      </div>
    </section>
  )
}

export default Subscribe;