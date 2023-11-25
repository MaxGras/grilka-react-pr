import CarouselCustom from "./customeCarousel"

import AccordionWrapper from "./accordionWrapper";
import ButtonWrapperOrder from "./buttonWrapper";
import UlList from "./ulListComponent";
import AnimSlider from "./animationSlider";
import CommentComp from "./commentSection";
import Avatar_1 from "../../src/assets/images/Avatar_1.png"
import Avatar_2 from "../../src/assets/images/Avatar_2.png"
import Avatar_3 from "../../src/assets/images/Avatar_3.png"
import Step_Img_1 from "../../src/assets/images/Step_Img_1.png"
import Step_Img_2 from "../../src/assets/images/Step_Img_2.png"
import Step_Img_3 from "../../src/assets/images/Step_Img_3.png"
import bgFrontImage from '../assets/images/frontImage.png'
import StepComponent from "./stepComponent";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
export default function MainDescrp() {
  const detail_Ultra = [
    "Розмір: 40 х 60×15 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 35% бавовна, 65% мікрофібра",
    "Вага виробу: 1720 г."
  ]
  const descrp_Ultra = [
    `Подушка створює відчуття прохолоди завдяки гелевому шару,
    окрім цього ідеально облягає форму голови та шиї за допомогою технології Visco Memory Foam.`,

    `Забезпечує стійкість до пилових кліщів, тому ця подушка ідеально підходить для алергіків.`,

    `Особливістю Visco-піни є те, що вона відкрита, гнучка та легка,
     забезпечує повітропроникність.Її мета – заповнити шийний зазор та забезпечити комфортний сон.` ]
  const descrp_Ultra_Higlited = {
    0: [8, 15],
    1: [79, 88]
  }
  const detail_M = [
    "Розмір: 33 x 53 x 12 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 100% мікрофібра, змінний",
    "Вага виробу: 1000 г."
  ]
  const detail_L = [
    "Розмір: 40 х 60×12 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 100% мікрофібра, змінний",
    "Вага виробу: 1285 г."
  ]
  const detail_L_Highlited = {
    naming: [0, 11]
  }
  const detail_XL = [
    "Розмір: 50 х 70 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 100% мікрофібра, змінний",
    "Вага виробу: 1300 г."
  ]
  const descrp_All_Pillows = [
    `Подушка підтримує хребет та шию в анатомічно правильному положенні, розподіляє навантаження між різними групами м’язів,
       ідеально пристосовується до форми та ваги голови та надає максимально комфортний та здоровий сон. `,
    `Особливістю Visco-піни є те, що вона відкрита, гнучка та легка, що забезпечує повітропроникність.`,
    `Забезпечує стійкість до пилових кліщів, тому ця подушка ідеально підходить для алергіків.`,
    `Сукупність всіх цих факторів дозволить бути бадьорим протягом цілого дня.`
  ]
  const descrp_All_Pillows_Highlited = {
    0: [210, 222],
    2: [79, 88]
  }
  const firstListOfLi = [
    "наповнювач 100% в’язкопружна піна.",
    "як тільки шар гелю стикається з тілом, він викликає у вас приємне відчуття прохолоди.",
    "гелева поверхня водостійка, не вимагає миття, достатньо протерти губкою.",
    "ідеально підходить для тих, у кого проблеми з потовиділенням під час сну.",
    "завдяки своїй структурі, яка ніжно облягає Вашу шию, подушка регулює кровообіг.",
    "чохол виготовлений з тканини мікроспандекс із застібкою-блискавкою, яку можна прати."
  ]
  const secondListOfLi = [
    "легкість дихання, також запобігає надмірному потовиділенню, та печії.",
    "допомагає зменшити ранковий головний біль та сухість у роті, спричинені неправильним вибором подушки.",
    "нормалізує тиск, який призводить до болю та порушеного сну.",
    "завдяки своїй структурі, яка ніжно облягає Вашу шию, подушка регулює кровообіг.",
    "відмінно підходить для сну у різних позиціях: на спині, животі, на боці.",
    "чохол виготовлений з тканини мікроспандекс із застібкою-блискавкою, яку можна прати."
  ]
  const thirdListOfLi = [
    `Клієнт має право відмовитись від отримання товару у відділенні пошти у випадку його браку.`,
    `Інтернет-магазин зобов’язаний оплатити послугу доставки на випадок, якщо клієнт помітив дефект, і надав всі докази цього дефекту.`,
    `Інтернет-магазин має право відмовити клієнту в заміні товару, якщо клієнт забрав товар з пошти і після цього помітив “дефект” або якщо товар йому не підійшов.`
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

    <div className="bg-[#222222] h-auto px-2 pt-[12%] pb-[5%] " ref={ref}>
      {isVisible && (
        <Fab size="large" onClick={scrollToTop} color="#CFD3DB" sx={{ opacity: '30%', position: "fixed", bottom: "60px", right: '20px' }} aria-label="Up">

          <ArrowUpwardIcon fontSize="large" sx={{ fill: "#000000" }} />
        </Fab>
      )}
      <div className="bg-gradient-to-r from-[#B1AEA9] to-[#29A0E2] to-[290%]  rounded-[27px] px-4 py-6 sm:px-12 flex flex-col gap-[1.2vh] h-full mb-[7%] ">
        <div className="bg-[#d0d1c9]  mx-4 rounded-[10px] pt-10"><img src={bgFrontImage} /></div>
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
          <div className="flex items-center self-start ml-12 ">
            <div className={miniBlockStyle}>після активації миттєво гріється</div>
          </div>
        </div>
        <CarouselCustom whichSlider={false}></CarouselCustom>
        <p className="text-[17px] font-[600] pt-2">Розмір: 15 x 9 см.</p>
        <AnimSlider firstPrice={"360 грн"} secondPrice={"180 грн"}></AnimSlider>
        <ButtonWrapperOrder />
        <CarouselCustom whichSlider={false}></CarouselCustom>
        <p className="text-[17px] font-[600] pt-2">Розмір: 10 x 7 см.</p>
        <AnimSlider firstPrice={"300 грн"} secondPrice={"150 грн"}></AnimSlider>
        <ButtonWrapperOrder />
        <div>Для чого купують?</div>
        <div>123</div>
        <AccordionWrapper name="Легка у використанні" listOfLi={secondListOfLi} isUl={true}></AccordionWrapper>
        <AccordionWrapper name="Про грілки" listOfLi={secondListOfLi} isUl={true}></AccordionWrapper>
      </div>

      <CommentComp city={Avatar_1Descrp.city} initials={Avatar_1Descrp.initials} descrp={Avatar_1Descrp.descrp} img={Avatar_1} ></CommentComp>
      <CommentComp city={Avatar_2Descrp.city} initials={Avatar_2Descrp.initials} descrp={Avatar_2Descrp.descrp} img={Avatar_2} ></CommentComp>
      <CommentComp city={Avatar_3Descrp.city} initials={Avatar_3Descrp.initials} descrp={Avatar_3Descrp.descrp} img={Avatar_3} ></CommentComp>
      <h3 className="text-[1.5em] text-center my-[5%] leading-[120%]">Як замовити нашу <span className="inline-block font-[600] text-[#F6AC38]">Ортопедичну подушку?</span></h3>
      <StepComponent img={Step_Img_1} index={1} descp={StepArray[0]} />
      <StepComponent img={Step_Img_2} index={2} descp={StepArray[1]} />
      <StepComponent img={Step_Img_3} index={3} descp={StepArray[2]} />
      <AccordionWrapper listOfLi={thirdListOfLi} name="Політика повернення товару" isUl={false}></AccordionWrapper>
    </div>

  )
}