import { Select,MenuItem,IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react"
import img_1 from '../assets/images/frontImage.png'
import img_2 from '../assets/images/Slider_1_1.jpg'
import img_3 from '../assets/images/Slider_2_5.jpg'
import img_4 from '../assets/images/Slider_2_3.jpg'

export default function OrderPicker({data,setNewData,spanClassName,id,index,showOrderPickers,setShowOrderPickers}){
    const [chosen, setChosen] = useState("Ultra");

    const handleSetChosen = (e) => {
     
         setNewData((prevData) => ({
           ...prevData,
           model: {
             ...prevData.model,
                [chosen]: 0
           }
         }))
        
      
         setChosen(e.target.value);
         
       }
       const handleDecrement = () => {
         if (data.model[chosen] > 1) {
           setNewData((prevData) => ({
             ...prevData,
             model: {
               ...prevData.model,
               [chosen]: --prevData.model[chosen]
             }
           }))
         }
       }
       const handleIncrement = () => {
         if (data.model[chosen] < 10) {
           setNewData((prevData) => ({
             ...prevData,
             model: {
               ...prevData.model,
               [chosen]: ++prevData.model[chosen]
             }
           }))
         }
       }

       const removeOrderPicker = (id) => {
        const newOrderPickers = showOrderPickers.filter((picker) => picker.id !== id);
        setNewData((prevData) => ({
            ...prevData,
            model: {
              ...prevData.model,
                 [chosen]: 0
            }
          }))
        setShowOrderPickers(newOrderPickers);
      };
      const addOrderPicker = () => {
        if (showOrderPickers.length < 4) {
          setShowOrderPickers([...showOrderPickers, { id: uuidv4(), isVisible: true }]);
        }
      };
    

    return(
        <>
             <div className=" flex flex-col items-center gap-[1vh]  justify-end h-full w-[30%]">
              <span className={spanClassName}>Модель</span>
              <Select className=" h-[55%] rounded-[27px] py-0 w-[120%] bg-[#FFFFFF]/50	text-center "
                sx={{
                  
                  "&:before": {
                    border: 'none',
                    outline: "none",
                    content: "none",
                    
                  },
                  "&:after": {
                    border: "none",
                    padding:'none'
                  }
                }}
                id="demo-simple-select"
                value={chosen}
                label="Age"
                onChange={handleSetChosen}
                variant="standard"


              >
                <MenuItem value={"M"}></MenuItem>
                <MenuItem value={"L"}></MenuItem>
                <MenuItem value={"XL"}></MenuItem>
                <MenuItem value={"Ultra"}></MenuItem>
              </Select>
            </div>
            <div className="flex flex-col  items-center gap-[1vh] justify-between  w-[30%]">
              <span className={spanClassName}>Кількість</span>
              <div className="bg-[#FFFFFF]/50 flex ml-[10%]  self-center h-[60%] w-full justify-between	 items-center rounded-[27px] ">
              <span className="px-2"  onClick={handleDecrement}>-</span>
                <span>{data.model[chosen]}</span>
                <span className="px-2" onClick={handleIncrement}>+</span>
              </div>
           
            </div>
            <IconButton
                  sx={{
                    width: "30%",
                    height: "54%",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: '0',
                    borderRadius: "27px",
                    alignSelf: "end",
                    paddingBlock: "2.5%",
                  }}
                  size="small"
                  onClick={() => {
                    if (index === 0) {
                      addOrderPicker();
                    } else {
                      removeOrderPicker(id);
                    }
                  }}
                >
                  {index > 0 ? <DeleteOutlineIcon /> : <AddIcon />}
                </IconButton>
        </>
    )
} 