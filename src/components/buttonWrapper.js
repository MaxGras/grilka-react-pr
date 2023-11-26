import { IconButton } from "@mui/material"

import { Button } from "@mui/material";
import { useState } from "react"
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';
import OrderPicker from "./orderPicker";
import { v4 as uuidv4 } from 'uuid';
import img_1 from '../assets/images/frontImage.png'
import img_2 from '../assets/images/Slider_1_1.jpg'
import img_3 from '../assets/images/Slider_2_5.jpg'
import img_4 from '../assets/images/Slider_2_3.jpg'
export default function ButtonWrapperOrder({ positionValue = "none", topValue = "0" }) {
  const [open, setOpen] = useState(false);
  const [helperOpenModal, setHelperOpenModal] = useState(false);
  const [showOrderPickers, setShowOrderPickers] = useState([{ id: uuidv4(), isVisible: true }]);
  const [fetchSuccess, setFetchSuccess] = useState(false)
  const [dataValue, setNewData] = useState({
    telephoneNumber: '',
    initials: '',
    cityAndDep: '',
    model: {
      "M": 0,
      "L": 0,
      "XL": 0,
      "Ultra": 0
    },

    comment: ""
  })

  const handleClose = () => {
    setOpen(false);
  }
  const handleHelperClose = () => {
    setHelperOpenModal(false);
  }
  const spanClassName = " text-[0.9em] font-[500] leading-[150%]";
  const strInputClassName = "outline-0 w-[85%] px-[5%] py-[2%] rounded-[27px] bg-[#FFFFFF]/50 overflow-scroll"
  const handleSuccessFetch = () => {
    setOpen(false);
    setFetchSuccess(true);
  }
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }))

  }
  const handleClickFetch = () => {
    const phoneRegex = /^[\d+()-]*\d+[\d+()-]*$/;
    if (dataValue.telephoneNumber !== '' && phoneRegex.test(dataValue.telephoneNumber)) {
      fetch('https://sheetdb.io/api/v1/lcnyvspcwfqzr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              Telephone: dataValue.telephoneNumber,
              Initials: dataValue.initials,
              City_Post: dataValue.cityAndDep,
              Model_М: dataValue.model.M,
              Model_L: dataValue.model.L,
              Model_XL: dataValue.model.XL,
              Model_Ultra: dataValue.model.Ultra,
              Comment: dataValue.comment
            }
          ]
        })
      })
        .then((response) => response.json())
        .finally(()=>{
          setNewData((prevData) => ({
            ...prevData,
            model: {
              "M":0,
              "L":0,
              "XL":0,
              "Ultra":0
            }
          }))
          handleSuccessFetch()
        })
    } else {
      setHelperOpenModal(true);
    }

  }

  const handleDecrement = (type)=>{
    if (dataValue.model[type] > 0) {
      setNewData((prevData) => ({
        ...prevData,
        model: {
          ...prevData.model,
          [type]: --prevData.model[type]
        }
      }))
  }}
  const handleIncrement = (type)=>{
    if (dataValue.model[type] < 10) {
      setNewData((prevData) => ({
        ...prevData,
        model: {
          ...prevData.model,
          [type]: ++prevData.model[type]
        }
      }))
  }}


  return (
    <>
      <Button onClick={() => { setOpen(true) }} variant="contained" sx={{
        bgcolor: '#EB6856',
        maxWidth: '95%',
        borderRadius: "27px",
        height: '6vh',
        marginTop: '5%',
        fontFamily: 'Segoe UI',
        paddingY: '3%',
        paddingX: "20%",
        textTransform: 'none',
        textAlign: "center",
        width: '100%',
        position: positionValue,
        top: topValue,
        '&:hover': {
          bgcolor: '#c95c4d'
        },

      }}><span className="w-full">Оформити замовлення</span></Button>
      <Modal open={fetchSuccess} onClose={() => setFetchSuccess(false)} onClick={()=>setFetchSuccess(false)} className="flex justify-center items-center">
        <Box className="bg-[#CFD3DB] font-[700] px-[3%] rounded-[27px] h-[30vh] w-[40vh] flex flex-col items-center justify-evenly ">
          <p className="font-[600] w-[80%] text-center   text-[#3C4152]">Менеджер зв’яжеться з Вами для підтвердження замовлення протягом дня</p>
          <p className=" text-center text-[#F6AC38]">Дякуємо, що залишили замовлення,
            Ми Вам неодмінно зателефонуємо</p>
         <div> <span className="text-[#0082D1]">Гарного дня</span>
          <span className="block text-[#F6AC38]">Слава Україні!</span></div>
        </Box>
      </Modal>
      <Modal open={open} onClose={handleClose} className="flex justify-center items-center">
        <Box className={"bg-[#CFD3DB] rounded-[27px]  w-[80%] gap-[1.3vh] flex flex-col  py-[5%] items-center "}>

          <div className="flex justify-end px-[5%]  h-[5%] pointer w-full" onClick={handleClose}><IconButton ><CloseIcon sx={{ fill: '#3C4152' }}></CloseIcon></IconButton ></div>
          <span className={spanClassName}>Номер телефону <span className="text-[#EB6856] font-[600] text-[1.2em]">*</span></span>
          <input required type="tel" name="telephoneNumber" onChange={(e) => handleChangeInput(e)} className={strInputClassName} />
          
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <div className="">
            <img className="w-[150px] h-[170px] object-contain rounded-[15px]"  src={img_1}/>
            <div className="bg-[#FFFFFF]/50 flex mt-2  h-[25px]  self-center  w-full justify-between	 items-center rounded-[27px] ">
              <span className="px-2" onClick={()=>handleDecrement('M')}>-</span>
                <span>{dataValue.model.M}</span>
                <span className="px-2"  onClick={()=>handleIncrement('M')} >+</span>
              </div>
          </div>
          <div className="">
            <img className="w-[150px] h-[170px] object-cover rounded-[15px]"  src={img_2}/>
            <div className="bg-[#FFFFFF]/50 flex h-[25px]  mt-2  self-center  w-full justify-between	 items-center rounded-[27px] ">
              <span className="px-2" onClick={()=>handleDecrement('L')} >-</span>
                <span>{dataValue.model.L}</span>
                <span className="px-2" onClick={()=>handleIncrement('L')} >+</span>
              </div>
          </div>
          <div className="">
            <img className="w-[150px] h-[170px] object-cover rounded-[15px]"  src={img_3}/>
            <div className="bg-[#FFFFFF]/50 flex h-[25px]  mt-2  self-center  w-full justify-between	 items-center rounded-[27px] ">
              <span className="px-2" onClick={()=>handleDecrement('XL')} >-</span>
                <span>{dataValue.model.XL}</span>
                <span className="px-2" onClick={()=>handleIncrement('XL')} >+</span>
              </div>
          </div>
          <div className="">
            <img className="w-[150px] h-[170px] object-cover rounded-[15px]"  src={img_4}/>
            <div className="bg-[#FFFFFF]/50 flex h-[25px]   mt-2 self-center  w-full justify-between	 items-center rounded-[27px] ">
              <span className="px-2" onClick={()=>handleDecrement('Ultra')} >-</span>
                <span>{dataValue.model.Ultra}</span>
                <span className="px-2" onClick={()=>handleIncrement('Ultra')}>+</span>
              </div>
          </div>
          
          
        </div>


          <span className={spanClassName}>Коментар</span>
          <input className={strInputClassName} name="comment" onChange={(e) => handleChangeInput(e)} type="text" />
          <Button variant="contained" onClick={handleClickFetch} sx={{
            bgcolor: '#EB6856',
            maxWidth: '95%',
            borderRadius: "27px",
            height: '6vh',
            marginTop: '5%',
            fontFamily: 'Segoe UI',
            paddingY: '3%',
            paddingX: "20%",
            textTransform: 'none',
            textAlign: "center",
            width: '100%',
            '&:hover': {
              bgcolor: '#c95c4d'
            },

          }}><span className="w-full">Відправити замовлення</span></Button>
          <Modal open={helperOpenModal} onClose={handleHelperClose} onClick={handleHelperClose} className="flex justify-center items-center">
            <Box className={"bg-[#CFD3DB] rounded-[27px]  w-[80%] py-[5%] flex justify-evenly items-center "}><WarningAmberIcon /> <span className={spanClassName}>Невірно набраний Номер Телефону!</span></Box>
          </Modal>
        </Box>
      </Modal>
    </>
  )
}