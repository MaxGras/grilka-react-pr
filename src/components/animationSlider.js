
import { useInView } from "react-intersection-observer"

export default function AnimSlider({firstPrice,secondPrice}) {
const [ref,inView]=useInView({
    triggerOnce:true,
    threshold: 1,
});
const animationStyles = {
  
    transform: inView ? 'translateX(82%)' : 'translateX(0)',
    transition: `transform 1s ease ${inView ? '0.5s' : '0s'}`,
  };
  const animTextStyle = {
    color: inView ? 'black' : 'white', 
    transition: `color 0.5s ease ${inView ? '0.5s' : '0s'}`,

  }
  const animTextWStyle = {
    color: inView ? 'white' : 'black', 
    transition: `color 0.5s ease ${inView ? '0.5s' : '0s'}`,

  }

    return (

        <div className=" mt-[5%] z-10 relative flex justify-between text-center items-center  px-[14%] bg-[#CFD3DB] shadow-md h-[7vh] rounded-[27px] text-[0.95em]"  style={{fontFamily:'Segoe UI'}} >
            <p className="z-50  text-white" style={animTextStyle}>Звичайна ціна
            <del className="block text-[1em]  font-[500]">{firstPrice}</del>
            </p>
            <p style={animTextWStyle} className="z-50">Ціна зараз
            <span className=" block text-[1em] font-[500]">{secondPrice}</span>
            </p>
            <div ref={ref} style={animationStyles} className="bg-[#F6AC38] h-[7vh] w-[55%] rounded-[27px] z-20 absolute left-[0%]">
                
            </div>
        </div>

    )

}