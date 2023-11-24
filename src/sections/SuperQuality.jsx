import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { Bounce,Flip, Hinge, JackInTheBox, Roll, Rotate, Slide,Fade, Zoom } from "react-awesome-reveal";


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <Zoom triggerOnce>
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        </Zoom>
        <Bounce triggerOnce>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegence
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        </Bounce>
        <Fade triggerOnce>
        <div className="mt-11">
          <Button label="View details" />
        </div>
        </Fade>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={422}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
