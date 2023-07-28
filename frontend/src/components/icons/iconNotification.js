import Badge from "react-bootstrap/Badge"
import { useNavigate } from "react-router-dom"

export default function IconNotification() {

    const navigate = useNavigate();
    
    return(
        <>
            <Badge bg="light" style={{ height: "20px", marginTop: "-10px", marginRight: "-18px", color: "blue" , zIndex : '6' }}>2</Badge>
            <button style={{ background: "none", border: "none" }} onClick={()=>navigate('/notifications')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
            </button>
        </>
    )
}

