import { Container } from "react-bootstrap";
import Notification from "./notification";

export default function Notifications() {
    const items = [
        {
            'notification' : "Je mange bien du pain",
            'createdAt' : '2023-07-27T14:00:48.000Z',
            'lu' : false
        },
        {
            'notification' : "Je mange bien du pain",
            'createdAt' : '2023-07-27T14:00:48.000Z',
            'lu' : true
        },
        {
            'notification' : "Je mange bien du pain",
            'createdAt' : '2023-07-27T14:00:48.000Z',
            'lu' : false
        }
    ]

    return(
        <Container style={{margin : "90px auto"}}>
            {
                items.map((item , index) => <Notification {...item} key={index} />)
            }
        </Container>
    )
}