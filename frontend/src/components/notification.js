import { Container } from "react-bootstrap";
import IconDelete from "./icons/iconDelete";

export default function Notification(props) {

    const theme = props.lu === true ? "white" : "#007bff" ;
    const color = props.lu === true ? "black" : "white" ;
    const weight = props.lu === true ? "400" : "bold" ;
    
    const heure = props.createdAt.split('T')[1].split(':');

    return(
        <Container style={{backgroundColor : theme , color : color ,fontWeight : weight , border : "1px solid rgba(0,0,0,0.1)" , height : "80px"}} className="d-flex justify-content-evenly align-items-center py-2 rounded-2">
            <div style={{width : "80%"}}>{props.notification}</div>
            <div style={{width : "15%" , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
                <span className="mb-2">{heure[0]+':'+heure[1]}</span>
                <i style={{color : color}}><IconDelete /></i>
            </div>
        </Container>
    )
}