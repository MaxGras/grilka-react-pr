import CarouselCustom from "./customeCarousel"

import AccordionWrapper from "./accordionWrapper";
import ButtonWrapperOrder from "./buttonWrapper";
import FourIMages from '../../src/assets/images/fourImages.jpg'
import AnimSlider from "./animationSlider";
import CommentComp from "./commentSection";
import Avatar_1 from "../../src/assets/images/Avatar_1.png"
import Avatar_2 from "../../src/assets/images/Avatar_2.png"
import Avatar_3 from "../../src/assets/images/Avatar_3.png"
import Step_Img_1 from "../../src/assets/images/Step_Img_1.png"
import Step_Img_2 from "../../src/assets/images/Step_Img_2.png"
import Step_Img_3 from "../../src/assets/images/Step_Img_3.png"

import StepComponent from "./stepComponent";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
export default function MainDescrp() {

  const secondListOfLi = [
    "Для активації потрібно кілька разів натиснути на металевий диск до появи кристалів.",
    "Щоб відновити грілку, достатньо прокип'ятити її у воді на повільному вогні до повного розчинення кристалів."
  ]
  const thirdListOfLi = [
    "Багаторазова грілка для рук допоможе з легкістю перенести холодні погодні умови взимку.  ",
    "Зігріває руки навіть у мокрих рукавичках, тому стане незамінним аксесуаром для зимових походів та тривалих прогулянок на морозі, а також забезпечить додаткове тепло та комфорт лижникам та сноубордистам під час катання на схилі. Також грілочки добре підійдуть для діток."
  ]
  const StepArray = [
    `Заповніть форму
    замовлення`,
    `Дочекайтесь дзвінка
    оператора`,
    `Оплатіть товар після
    отримання`
  ]
  const Avatar_1Descrp = {
    initials: "Олександр Шишло",
    city: "Київ",
    descrp: `По 10 годин проводжу за кермом. Вона
    допомагає зняти втому та відновити сили)`
  }

  const Avatar_2Descrp = {
    initials: "Ганна Мавдрик",
    city: "Київ",
    descrp: `Підтримує спину в правильному
    положенні та зменшує дискомфорт.
    Рекомендую її всім молодим матусям.)`
  }

  const Avatar_3Descrp = {
    initials: "Віталій Чарник",
    city: "Дніпро",
    descrp: `Після травми хребта мені важко заснути
    без болю. Завдяки цій подушці я можу
    забезпечити собі комфортний сон. 
    Велике спасибі за цей продукт!`
  }

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleVisibilityChange = (visible) => {
    setIsVisible(visible);
  };
  useEffect(() => {
    handleVisibilityChange(inView);

  }, [inView]);
  const miniBlockStyle = "bg-gradient-to-r from-[#1393D3] from-[-90%] to-[#FFFFFF] to-[380%] text-white px-2 py-[8px] rounded-full text-[12px] font-[700] uppercase ";
  return (

    <div className="bg-[#222222]  h-auto px-4 pt-[12%] pb-[5%] " ref={ref}>
      {isVisible && (
        <Fab size="large" onClick={scrollToTop} color="#CFD3DB" sx={{ opacity: '30%', position: "fixed", bottom: "60px", right: '20px' }} aria-label="Up">

          <ArrowUpwardIcon fontSize="large" sx={{ fill: "#000000" }} />
        </Fab>
      )}
      <div className="bg-gradient-to-r  mx-auto from-[#B1AEA9] to-[#29A0E2] to-[290%]  rounded-[27px] px-4 py-6 sm:px-12 flex flex-col gap-[1.2vh] h-full mb-[7%] ">
        <CarouselCustom whichSlider={true} anotherSlider={true}></CarouselCustom>
        <p className="text-[17px] font-[600] pt-2">Розмір: 10 x 8 см.</p>
        <AnimSlider firstPrice={"360 грн"} secondPrice={"180 грн"}></AnimSlider>
        <ButtonWrapperOrder />
        <div className="flex flex-col gap-2 items-center gap-4">
          <div className="flex items-center gap-4">
            <div className={miniBlockStyle}>1000+ використань</div>
            <div className={miniBlockStyle}>Гріє 40 хвилин</div>
          </div>
          <div className="flex items-center gap-6">
            <div className={miniBlockStyle}>гріє до 54°C</div>
            <div className={miniBlockStyle}>компактна</div>
            <div className={miniBlockStyle}>безпечна</div>
          </div>
          <div className="flex items-center gap-4">
            <div className={miniBlockStyle}>без запаху</div>
            <div className={miniBlockStyle}>Проста у використанні</div>
          </div>
          <div className="flex items-center self-center ">
            <div className={miniBlockStyle}>після активації миттєво гріється</div>
          </div>
        </div>
        <CarouselCustom whichSlider={true}></CarouselCustom>
        <p className="text-[17px] font-[600] pt-2">Розмір: 15 x 9 см.</p>
        <AnimSlider firstPrice={"360 грн"} secondPrice={"180 грн"}></AnimSlider>
        <ButtonWrapperOrder />
        <CarouselCustom whichSlider={false}></CarouselCustom>
        <p className="text-[17px] font-[600] pt-2">Розмір: 10 x 7 см.</p>
        <AnimSlider firstPrice={"300 грн"} secondPrice={"150 грн"}></AnimSlider>
        <ButtonWrapperOrder />
        <div className="self-center text-[21px] font-[600] bg-[#b7bec7] rounded-full px-4 py-1 my-3">Для чого купують?</div>
       <div className="my-4"><img src={FourIMages}/></div>
        <AccordionWrapper name="Легка у використанні" listOfLi={secondListOfLi} isUl={true}></AccordionWrapper>
        <AccordionWrapper name="Про грілки" listOfLi={thirdListOfLi} isUl={true}></AccordionWrapper>
      </div>

      <CommentComp city={Avatar_1Descrp.city} initials={Avatar_1Descrp.initials} descrp={Avatar_1Descrp.descrp} img={Avatar_1} ></CommentComp>
      <CommentComp city={Avatar_2Descrp.city} initials={Avatar_2Descrp.initials} descrp={Avatar_2Descrp.descrp} img={Avatar_2} ></CommentComp>
      <CommentComp city={Avatar_3Descrp.city} initials={Avatar_3Descrp.initials} descrp={Avatar_3Descrp.descrp} img={Avatar_3} ></CommentComp>
      <h3 className="text-[1.5em] text-center my-[5%] leading-[120%] mx-auto block w-[80%]  bg-[#888888] rounded-full py-2">Як замовити нашу <br/><span className="inline-block font-[600] text-[#F6AC38]">Грілку?</span></h3>
      <StepComponent img={Step_Img_1} index={1} descp={StepArray[0]} />
      <StepComponent img={Step_Img_2} index={2} descp={StepArray[1]} />
      <StepComponent img={Step_Img_3} index={3} descp={StepArray[2]} />
      <AccordionWrapper listOfLi={thirdListOfLi} name="Політика повернення товару" isUl={false}></AccordionWrapper>
    </div>

  )
}