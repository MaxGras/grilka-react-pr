

export default function CommentComp({ img, initials, city, descrp }) {



    return (

        <div className=" bg-[#CFD3DB] rounded-[27px] mt-[5%] w-[80%] flex flex-col justify-between items-center mx-auto">
            <div className="py-[3%] bg-[#D8DCE2] flex-1 w-full rounded-[27px] flex items-center gap-[5%] px-[4%]">
                <img className="h-[80%]" src={img} alt="avatar"></img>
                <span className="text-[1em] font-[600]  leading-[130%]">{initials}
                    <span className="block text-[0.9em]">м. {city}</span>
                </span>
            </div>
            <p className="font-[400] px-[4%] py-[3%] text-[0.9em] text-[#333333]">{descrp}</p>
        </div>
    )
}