export default function UlList({ naming, listOfThings, highlightedItems={} }) {
 let strClassSpan = "font-[500] text-[0.95em] mt-[2px]";
  if(highlightedItems.hasOwnProperty("naming")){
  strClassSpan += ' text-[#F6AC38] font-[600]'
}


    return (
      <>
        <span className={strClassSpan}>{naming}</span>
        <ul className="list-disc font-[400] list-ouside pl-[8%] text-[0.9em] w-[95%] pb-[2%]">
          {listOfThings.map((item, index) => {
            if (highlightedItems.hasOwnProperty(index)) {
              const [start, end] = highlightedItems[index];
              const highlightedPart = item.slice(start, end + 1); 
              const beforePart = item.slice(0, start); 
              const afterPart = item.slice(end + 1); 
              return (
                <li key={index}>
                  {beforePart}
                  <span className="text-[#F6AC38] font-[600]">{highlightedPart}</span>
                  {afterPart}
                </li>
              );
            } else {
              return <li key={index}>{item}</li>;
            }
          })}
        </ul>
      </>
    );
  }
  
  
  
  
  
  