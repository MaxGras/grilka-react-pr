import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionWrapper({listOfLi, name = "Переваги", isUl}){
  let strUlClass = ` list-ouside pl-[8%] w-[95%]`;

    return(
        <Accordion
          square={true}
          sx={{
            borderRadius: '27px',
            backgroundColor: "rgba(255,255,255,0.18)",
            borderBottomLeftRadius: '27px',
            borderBottomRightRadius: '27px',
            boxShadow:'none',
            '&:before': {
              position: 'relative'
            }

          }} >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"

          >
            <Typography sx={{ fontWeight: "500", fontSize: '1.2em', fontWeight:"600" }}>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails     >
            <div sx={{  fontWeight: "350", fontSize: '0.9em' }}>
              <ul className = {strUlClass += (!isUl) ? ` list-disc`: ` list-none	`} >
               {listOfLi.map((item,index)=>(<li className={isUl ? 'mt-[10px]' : 'gap-0'} key={index}>{item}</li>))}
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      
    )
}