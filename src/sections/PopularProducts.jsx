import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
import { Fade, Zoom } from "react-awesome-reveal";


const PopularProducts = () => {
  return (
   <section id="products" className="max-container max-sm:mt-12 " >
<div className="flex flex-col justify-start gap-5">
  <Zoom triggerOnce>
  <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
  </Zoom>
  <Fade>
  <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value </p>
  </Fade>
</div>
<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
  {products.map((product) =>(
    <PopularProductCard key={product.name} {...product}  />
  ))}
</div>
   </section>
  )
}

export default PopularProducts