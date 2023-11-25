

export default function StepComponent({img,index,descp}){


    return(
        <div className="w-[80%] items-center bg-[#ffffff] mx-[auto] rounded-[27px] flex gap-[3%] mb-[5%] px-[3%] py-[3%]">
            <img className="h-[80%]" src={img} alt="svg "></img>
            <span className="text-[0.9em] font-[600] leading-[150%] text-[#333333] max-w-[70%]">Крок {index} :
                <span className="inline-block">{descp}</span>
            </span>
        </div>
    )
}