import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import { Flip, Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Zoom>
          <a href="/">
           <img src={footerLogo} width={150} height={46} />
          </a>
          </Zoom>
          <Slide>
          <p className="mt-6 text-base font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          </Slide>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <Zoom>
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-75 ">
            <img src={icon.src} alt={icon.alt} width={24} height={24}/>
          </div>
          </Zoom>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <Flip>
               <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              </Flip>
               <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor:pointer" key={link.name}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
               </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign}alt="copy right" width={20} height={20}  className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer