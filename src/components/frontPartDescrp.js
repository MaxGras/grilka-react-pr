import bgFrontImage from '../assets/images/frontImage.png'
import ButtonWrapperOrder from './buttonWrapper'

export default function FrontDescrp() {

  return (
    <div className=" relative pb-[10%]  flex flex-col   text-white gap-4">
      <div className="flex flex-col px-8 py-4">
        <p className="text-[13px] self-start">Замовляйте 4 та більше одиниць -</p>
        <p className="text-[13px] self-end">отримуйте <span className="text-[#FEAD2F]">безкоштовну</span> доставку</p>
      </div>
      <div className="bg-gradient-to-r from-[#1393D3] to-[#222222] w-[70%] pr-5 pl-1 py-2 rounded-r-full text-[19px] font-[700]">
        БАГАТОРАЗОВІ ГРІЛКИ ДЛЯ РУК
      </div>
      <img className='px-4' src={bgFrontImage} alt="grilka"></img>
      <div className="self-end  uppercase  bg-gradient-to-r from-[#1393D3] to-[#222222] w-[60%]  pl-7 py-1 rounded-l-full text-[15px] font-[700]">
        у нас <span className="text-[#FEAD2F]">багааатий</span> асортимент
      </div>
      <div className='flex flex-row justify-center items-center gap-5'>
        <div className='flex flex-col items-center'>
          <span className='text-[13px] font-[600] block'>Звичайна ціна</span>
          <span className='text-[25px] font-[700] block line-through'>360грн</span>
        </div>
        <span className='text-[35px] text-[#FEAD2f] font-[700] block'>180грн</span>
      </div>
      <div className='mx-auto w-[80%]'><ButtonWrapperOrder /></div>
      <div className=" mt-2 flex flex-row items-center justify-center gap-2">
        <span className='uppercase text-[12px] font-[600]'>Залишилось</span>
        <div className='h-[px] w-[30px] p-0 flex items-center justify-center rounded-[3.2px] tex-center text-[#222222] text-[19px] font-[700] bg-[#FEAD2F] '><span >6</span></div>
        <span className='uppercase text-[12px] font-[600]'>штук з акції</span>
      </div>
      <div className='flex flex-row items-center justify-between px-4 py-2 bg-gradient-to-r from-[#1393D3] from-[-68%]  to-[#222222] to-[150%]'>
        <div className='flex flex-row items-center '>
          <div className='bg-PromIcon w-[40px] h-[30px] bg-no-repeat bg-contain'></div>
          <p className='text-[13px] font-[400] ml-1'>Зручність та якість</p>
          </div>
          <div className='flex flex-row items-center '>
          <div className='bg-TimerIcon w-[40px] h-[30px] bg-no-repeat bg-contain'></div>
          <p className='text-[13px] font-[400] ml-1'>Швидка доставка</p>
          </div>
          <div className='flex flex-row items-center '>
          <div className='bg-CardIcong w-[40px] h-[30px] bg-no-repeat bg-contain'></div>
          <p className='text-[13px] font-[400] ml-1'>Оплата при отриманні</p>
          </div>

      </div>
    </div>
  )
}